define({ "api": [
  {
    "type": "post",
    "url": "/signup",
    "title": "",
    "group": "Users",
    "name": "signupUser",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "email",
            "description": "<p>user must need to provide the email</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "password",
            "description": "<p>user must need to provide the password</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request params:",
          "content": "{\n \"email\" : \"test@gmail.com\",\n \"password\": \"123456\"\n}",
          "type": "String"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Msg",
            "description": "<p>signup successful!</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Signup success response:",
          "content": "HTTP/1.1 200OK\n{\n   \"msg\": \"Signup Successful\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/controllers/user.controller.js",
    "groupTitle": "Users"
  }
] });
