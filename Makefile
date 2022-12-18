zip:
	rm -rf function.zip
	zip function.zip ./*

update-zip:
	aws lambda update-function-code --function-name my-function --zip-file fileb://function.zip

invoke-function:
	rm -rf response.json 
	aws lambda invoke --function-name my-function --cli-binary-format raw-in-base64-out --payload file://request.json response.json
