#!/bin/bash

## path of the dir .../njordfeed
Path="C:/njordfeed"

cd "$Path/clf"

Component="domain" ## add domain name with out the extention
ParentDomainName="domain.se" ## with extention

MainComponents="ParameterKey=Component,ParameterValue=$Component ParameterKey=ParentDomainName,ParameterValue=$ParentDomainName"


echo "Hostedzone"
aws cloudformation create-stack --stack-name $Component-hostedzone --template-body file://hostedzone.yml --region us-east-1 --capabilities CAPABILITY_NAMED_IAM --parameters $MainComponents 
aws cloudformation wait stack-create-complete --stack-name $Component-hostedzone --region us-east-1

hostedzoneid=$(aws cloudformation describe-stacks --stack-name $Component-hostedzone --output json --region us-east-1 | jq -r '.Stacks[0].Outputs[] | select(.OutputKey=="HostedZoneId") | .OutputValue')

echo "Frontend"
aws cloudformation create-stack --stack-name $Component-frontend --template-body file://frontend.yml --region us-east-1 --capabilities CAPABILITY_NAMED_IAM --parameters $MainComponents ParameterKey=HostedZoneId,ParameterValue=$hostedzoneid
aws cloudformation wait stack-create-complete --stack-name $Component-frontend --region us-east-1


cloudfrontid=$(aws cloudformation describe-stacks --stack-name $Component-frontend --output json --region us-east-1 | jq -r '.Stacks[0].Outputs[] | select(.OutputKey=="CloudFrontDistributionId") | .OutputValue')


# Build react app and sync/upload files to s3 bucket 
echo "Build react app and sync/upload files to s3 bucket "
cd "$Path/client"
#npm i
npm run build && aws s3 sync build/ s3://$ParentDomainName --region us-east-1
# Clear cache from cloudfront so the frontend can be seen immediately .
aws cloudfront create-invalidation --distribution-id $cloudfrontid --paths "/*"


