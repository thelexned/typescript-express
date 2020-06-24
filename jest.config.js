module.exports = {
    "roots": ["src","tests"],
    "transform": {"^.+\\.tsx?$": "ts-jest"},
    "setupFiles": [
        "./jest.setup.ts"
    ]
}