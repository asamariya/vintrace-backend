const getTotalYearVariety = (req, res) => {
  const lotCode = req.params.lotCode;
  res.json({ msg: 'Success!', lotCode: lotCode });
};

exports.getTotalYearVariety = getTotalYearVariety;
