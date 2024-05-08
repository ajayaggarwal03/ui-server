ARG BASE_SERVER_IMAGE=temporalio/base-server:1.15.5
ARG BASE_BUILDER_IMAGE=temporalio/base-builder:1.14.5

FROM ${BASE_BUILDER_IMAGE} AS server-builder

WORKDIR /home/server-builder

COPY go.mod go.sum ./
RUN go mod download

COPY . ./

RUN make build-server

##### UI server #####

FROM ${BASE_SERVER_IMAGE} AS ui-server

ARG TEMPORAL_CLOUD_UI="false"

WORKDIR /home/ui-server

RUN addgroup temporal
RUN adduser -G temporal -D temporal

RUN mkdir ./config
RUN chown temporal:temporal ./config -R
COPY --from=server-builder /home/server-builder/ui-server ./
COPY docker/start-ui-server.sh ./start-ui-server.sh
COPY docker/config-template.yaml ./config-template.yaml

RUN chown temporal:temporal /home/ui-server -R

EXPOSE 8080
ENTRYPOINT ["./start-ui-server.sh"]
ENV TEMPORAL_CLOUD_UI=$TEMPORAL_CLOUD_UI
