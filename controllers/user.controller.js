const register = async (req, res) => {
  const { email, password, name, phone, date_of_birth, address } = req.body;
  const newUser = {
    id: uuid(),
    email,
    password,
    name,
    phone,
    date_of_birth,
    address,
  };

  const user = new User(newUser);
  await user.save();
  res.send({
    status: 200,
    message: 'Register successfully',
    data: newUser,
  });
};

const login = async (req, res) => {
  res.send('login route');
};

module.exports = { register, login };
