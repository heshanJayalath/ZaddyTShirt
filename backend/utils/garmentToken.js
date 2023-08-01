// create token and saving in cookies
const sendGarmentToken = (garment, statusCode, res) => {
    const token = garment.getJwtToken();

    // options for cookies
    const options = {
        expires: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
        httpOnly: true,
    };
    res.status(statusCode).cookie("garment_token", token, options).json({
        success: true,
        garment,
        token,
    });
};
module.exports = sendGarmentToken;