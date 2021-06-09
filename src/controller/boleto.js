const regex = /(^[0-9]+$)/;

module.exports = {


 async home(req,res)
 {
  return res.status(200).json({message: "hello word"})
 },

  async verficarBoleto(req, res, next) {
    try {
      const { id } = req.params;

      const match = regex.exec(id);
      if (match) {
        const barCode = match[1];
        if (barCode.length == 44 || barCode.length == 48) {
          return res.status(200).json({
            barCode: barCode,
            amount: "20.00",
            expirationDate: "2021-06-16",
          });
        } else {
          return res
            .status(404)
            .json({ message: "Este código de barra não valido" });
        }
      } else {
        return res
          .status(400)
          .json({ error: "Letras ou caracter não são permetidos" });
      }
    } catch (error) {
      res.status(500).json({ message: "Falha no servidor" });
      next(error);
    }
  },
};
