const asyncHandler = (fn) => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);
//const getBootcamps = asyncHandler(...);
const getBootcamps = (fn) => (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);

async (req, res, next) => {
    const bootcamps = await Bootcamp.find();
    res.status(200).json({success: true, count: bootcamps.length, data: bootcamps});
}

const getBootcamps = (req, res, next) => Promise.resolve((async (req, res, next) => {
    const bootcamps = await Bootcamp.find();
    res.status(200).json({success: true, count: bootcamps.length, data: bootcamps});
})(req, res, next)).catch(next)

const getBootcamps = asyncHandler(async (req, res, next) => {
    const bootcamps = await Bootcamp.find()
    res.status(200).json({success: true, count: bootcamps.length, data: bootcamps})
})
