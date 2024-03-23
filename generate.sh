# pip install grpcio-tools
cp ./proto/feed.proto ./pyfeedcontract
python -m grpc_tools.protoc -I . --python_out=./ --grpc_python_out=./ ./pyfeedcontract/feed.proto
rm -rf ./pyfeedcontract/feed.proto

# npm install -g grpc-tools
grpc_tools_node_protoc --js_out=import_style=commonjs,binary:./jsfeedcontract --grpc_out=./jsfeedcontract --plugin=protoc-gen-grpc=`which grpc_tools_node_protoc_plugin` ./proto/feed.proto

# brew install protobuf
# brew install protoc-gen-go
# might be MacOS specific:
# export PATH="$PATH:$(go env GOPATH)/bin"
protoc -I./proto --go_out=./gofeedcontract --go_opt=paths=source_relative     --go-grpc_out=./gofeedcontract --go-grpc_opt=paths=source_relative     ./proto/feed.proto  --experimental_allow_proto3_optional