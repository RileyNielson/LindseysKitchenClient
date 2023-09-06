import AWS from "aws-sdk";

// Function to upload Photo to s3
async function uploadPhoto(photo, recipe){
  // S3 Bucket Name
  const S3_BUCKET = "lindseyskitchenphotos";
  console.log(process.env.AWS_S3_ACCESS_KEY_ID);

  // S3 Region
  const REGION = "us-west-1";

  // S3 Credentials
  AWS.config.update({
    accessKeyId: "AKIAZSSAMLGZM76KPS7P",
    secretAccessKey: "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",
  });

  const s3 = new AWS.S3({
    params: { Bucket: S3_BUCKET },
    region: REGION,
  });

  // Photos Parameters
  const params = {
    Bucket: S3_BUCKET,
    Key: recipe.title,
    Body: photo,
  };
  console.log(params);

  // Uploading photo to s3
  var upload = s3
    .putObject(params)
    .on("httpUploadProgress", (evt) => {
      // Photo uploading progress
      console.log(
        "Uploading " + parseInt((evt.loaded * 100) / evt.total) + "%"
      );
    })
    .promise();

  await upload.then((err) => {
    console.log(err);
    // Fille successfully uploaded
    // alert("Photo uploaded successfully.");
  });

  return;
};

export default uploadPhoto;
