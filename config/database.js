var url;
if (process.env.NODE_ENV == 'test')
    url = "mongodb://localhost/project-cursorTest"
else
    url = "mongodb://localhost/project-cursorDev"

module.exports = {
    url: url
};

