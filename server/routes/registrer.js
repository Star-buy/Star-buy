const {
  getAllNames,
  getAllEmails,
  signup,
  getPasswordByEmail,
  getUserNameandImage,
  getusername,
  signupWithoutimg,
  signupAdmin,
  getRole,
} = require("../database-mysql/index");

const router = require("express").Router();
const bcrypt = require("bcrypt");

const cloudinary = require("../utils/cloudinary");
var cloudinar = require("cloudinary");
var cloudinar = require("cloudinary").v2;

router.get("/get", (req, res) => {
  get((err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
  });
});

router.post("/signup", async (req, res) => {
  const image = req.body.image;
  if (image) {
    const { username, email } = req.body;
    getAllNames(username, async (err, result) => {
      if (err) {
        res.send(err);
      }
      if (result.length > 0) {
        res.send("username exist");
        return;
      } else {
        getAllEmails(email, async (err, result) => {
          if (err) {
            res.send(err);
          }
          if (result.length > 0) {
            res.send("email exist");
            return;
          } else {
            try {
              const response = await cloudinar.uploader.upload(
                image,
                async function (error, result) {
                  const url = result.secure_url;
                  const salt = await bcrypt.genSalt();
                  const hashedPassword = await bcrypt.hash(
                    req.body.password,
                    salt
                  );
                  signup(username, email, url, hashedPassword, (err) => {
                    if (err) {
                      res.send(err);
                    } else {
                      res.send("signup successful");
                      return;
                    }
                  });
                }
              );
            } catch {
              res.status(500);
            }
          }
        });
      }
    });
  } else {
    const { username, email } = req.body;
    getAllNames(username, async (err, result) => {
      if (err) {
        res.send(err);
      }
      if (result.length > 0) {
        res.send("username exist");
        return;
      } else {
        getAllEmails(email, async (err, result) => {
          if (err) {
            res.send(err);
          }
          if (result.length > 0) {
            res.send("email exist");
            return;
          } else {
            try {
              const salt = await bcrypt.genSalt();
              const hashedPassword = await bcrypt.hash(req.body.password, salt);
              signupWithoutimg(username, email, hashedPassword, (err) => {
                if (err) {
                  res.send(err);
                } else {
                  res.send("signup successful");
                  return;
                }
              });
            } catch {
              res.status(500);
            }
          }
        });
      }
    });
  }
});

router.post("/signup", async (req, res) => {
  const image = req.body.image;
  if (image) {
    const { username, email } = req.body;
    getAllNames(username, async (err, result) => {
      if (err) {
        res.send(err);
      }
      if (result.length > 0) {
        res.send("username exist");
        return;
      } else {
        getAllEmails(email, async (err, result) => {
          if (err) {
            res.send(err);
          }
          if (result.length > 0) {
            res.send("email exist");
            return;
          } else {
            try {
              const response = await cloudinar.uploader.upload(
                image,
                async function (error, result) {
                  const url = result.secure_url;
                  const salt = await bcrypt.genSalt();
                  const hashedPassword = await bcrypt.hash(
                    req.body.password,
                    salt
                  );
                  signup(username, email, url, hashedPassword, (err) => {
                    if (err) {
                      res.send(err);
                    } else {
                      res.send("signup successful");
                      return;
                    }
                  });
                }
              );
            } catch {
              res.status(500);
            }
          }
        });
      }
    });
  } else {
    const { username, email } = req.body;
    getAllNames(username, async (err, result) => {
      if (err) {
        res.send(err);
      }
      if (result.length > 0) {
        res.send("username exist");
        return;
      } else {
        getAllEmails(email, async (err, result) => {
          if (err) {
            res.send(err);
          }
          if (result.length > 0) {
            res.send("email exist");
            return;
          } else {
            try {
              const salt = await bcrypt.genSalt();
              const hashedPassword = await bcrypt.hash(req.body.password, salt);
              signupWithoutimg(username, email, hashedPassword, (err) => {
                if (err) {
                  res.send(err);
                } else {
                  res.send("signup successful");
                  return;
                }
              });
            } catch {
              res.status(500);
            }
          }
        });
      }
    });
  }
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  getAllEmails(email, (err, result) => {
    if (err) {
      res.send(err);
    }
    if (!result.length) {
      res.send("user not found");
      return;
    } else {
      getPasswordByEmail(email, (err, result) => {
        if (err) {
          res.send(err);
        }
        if (result) {
          try {
            bcrypt.compare(
              password,
              result[0].password,
              function (err, result) {
                if (err) {
                  res.send(err);
                }
                if (result === false) {
                  res.send("login failed");
                }
                if (result === true) {
                  getRole(email, (err, result) => {
                    if (err) {
                      return res.send(err);
                    }
                    if (result.length) {
                      if (result[0].role === "admin") {
                        return res.send("hi admin ");
                      }
                      return res.send("login successful");
                    } else {
                      res.send("not found");
                    }
                  });
                }
              }
            );
          } catch (err) {
            res.send(err);
          }
        } else {
          res.send(err);
        }
      });
    }
  });
});

router.get("/dd", (req, res) => {
  get((err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
  });
});

router.post("/ad", (req, res) => {
  const email = req.body.email;
  getRole(email, (err, result) => {
    res.send(result);
  });
});

module.exports = router;

router.post("/adminroleregistration", async (req, res) => {
  const { username, email, image, role } = req.body;
  getAllNames(username, async (err, result) => {
    if (err) {
      res.send(err);
    }
    if (result.length > 0) {
      res.send("username exist");
      return;
    } else {
      getAllEmails(email, async (err, result) => {
        if (err) {
          res.send(err);
        }
        if (result.length > 0) {
          res.send("email exist");
          return;
        } else {
          try {
            const response = await cloudinar.uploader.upload(
              image,
              async function (error, result) {
                const url = result.secure_url;
                const salt = await bcrypt.genSalt();
                const hashedPassword = await bcrypt.hash(
                  req.body.password,
                  salt
                );
                signupAdmin(
                  username,
                  email,
                  url,
                  hashedPassword,
                  role,
                  (err) => {
                    if (err) {
                      res.send(err);
                      return;
                    } else {
                      res.send("signup successful admin !");
                      return;
                    }
                  }
                );
              }
            );
          } catch {
            res.status(500);
          }
        }
      });
    }
  });
});

router.post("/getUserinfo", (req, res) => {
  const email = req.body.email;
  getUserNameandImage(email, (err, result) => {
    if (err) {
      res.send(err);
    }
    if (result.length) {
      res.send([result[0].username, result[0].image]);
      return;
    }
    if (!result.length) {
      getusername(email, (err, result) => {
        if (err) {
          res.send(err);
        }
        if (result.length) {
          res.send(result[0].username);
          return;
        }
        if (!result.length) {
          res.send("not found");
          return;
        }
      });
    }
  });
});
