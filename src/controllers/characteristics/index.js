// const { getOne, getAll } = require("../../services/characteristics/class");

// async function getCharacteristics(res, options, ...args) {
//   try {
//     const data = await options.method.apply(this, args);
//     res.status(options.success).json({
//       OK: true,
//       data,
//     });
//   } catch (err) {
//     res.status(options.error.status).json({
//       OK: false,
//       message: options.error.message,
//     });
//   }
// }

// // getCharacteristics(() => console.log(id))

// const getClass = async (req, res) => {
//   getCharacteristics(
//     res,
//     {
//       success: 200,
//       error: {
//         status: 500,
//         message: "Ooops, something went wrong",
//       },
//       method: getOne,
//     },
//     req.params.id
//   );
// };

// const getAllClasses = async (_, res) => {
//   getCharacteristics(res, {
//     success: 200,
//     error: {
//       status: 500,
//       message: "Ooops, something went wrong",
//     },
//     method: getAll,
//   });
// };

// module.exports = {
//   getClass,
//   getAllClasses,
// };
