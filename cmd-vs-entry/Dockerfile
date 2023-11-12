# This is the base image
FROM ubuntu

# When container is run with `docker run` then this command will be executed
CMD sleep 5

# But what if we want to change 5 to something else at runtime?
# We can do that bu running docker run sleep 10 but that is not very intuitive
# we only want to pass number of seconds to sleep
# We can do that with entry point where the arguments are appended to the end of the entry point command
ENTRYPOINT ["sleep"]
CMD ["5"]

# But if not command line arguments are passed then ENTRYPOINT will be executed with no arguments
# So we need to specify both the command and entrypoint cmd instruction will be appended to the end of the entrypoint if arguments are not specified
# If we want to change the Entrypoint command then we can do that by passing --entrypoint flag to docker run command