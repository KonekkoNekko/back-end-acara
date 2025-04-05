import { version } from "mongoose";
import swaggerAutogen from "swagger-autogen";

const doc = {
  info: {
    version: "v0.0.1",
    title: "Dokumentasi API ACARA",
    description: "Dokumentasi API ACARA",
  },
  servers: [
    {
      url: "http://localhost:3000/api",
      description: "Local Server",
    },
    {
      url: "https://back-end-acara-topaz.vercel.app/api",
      description: "Deploy Server",
    },
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
      },
    },
    schemas: {
      LoginRequest: {
        identifier: "bielawan",
        password: "1234567890",
      },
      ActivationRequest: {
        code: "abcdef",
      },
      CreateCategoryRequest: {
        name: "",
        description: "",
        icon: ""
      },
      CreateEventRequest: {
        name: "",
        banner: "fileUrl",
        category: "Category ObjectID",
        description: "",
        startDate: "yyyy-mm-dd hh:mm:ss",
        endDate: "yyyy-mm-dd hh:mm:ss",
        location: {
          region: "RegionID",
          coordinates: [0, 0],
        },
        isOnline: false,
        isFeatured: false,
      },
      RemoveMediaRequest: {
        fileUrl: ""
      },
    },
  },
};
const outputFile = "./swagger_output.json";
const endpointsFile = ["../routes/api.ts"];

swaggerAutogen({ openapi: "3.0.0" })(outputFile, endpointsFile, doc);
