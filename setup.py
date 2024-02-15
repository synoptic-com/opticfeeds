from setuptools import setup

setup(
    name="pyfeedcontract",
    version="0.0.1",
    description="Production grpc contracts",
    url="git@github.com:synoptic-com/opticfeeds.git",
    license="unlicensed",
    packages=["pyfeedcontract"],
    install_requires=[
        "grpcio-tools",
        "protobuf",
    ],
    zip_safe=False,
)
