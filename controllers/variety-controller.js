const getTotalVariety = (req, res) => {
  const lotCode = req.params.lotCode;
  res.json({ msg: 'Success!', lotCode: lotCode });
};

exports.getTotalVariety = getTotalVariety;
