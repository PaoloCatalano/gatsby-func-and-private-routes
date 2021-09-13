const paolo = "Paolo"

// module.exports.name = paolo   -> {"hello": {"name": "Paolo"}}
// module.exports.name = "Paolo" -> {"hello": {"name": "Paolo"}}

module.exports = paolo //        -> {"hello": "Paolo"}
