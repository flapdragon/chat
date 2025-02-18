// TODO: remove token from user record

const authLogout = (req, res) => {
  if (!req.user) {
    res.status(401).json({ message: "Not authenticated." })
  }
  req.logout((err) => {
    if (err) {
      return res.status(400)
    }
    res.status(200).json({ message: "Logged out." })
  })
}

export default authLogout