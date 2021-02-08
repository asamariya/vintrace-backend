const getTotalYear = (req, res) => {
  const lotCode = req.params.lotCode;
  res.json({ msg: 'Success!', lotCode: lotCode });
};

exports.getTotalYear = getTotalYear;
