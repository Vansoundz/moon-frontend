import Axios from "axios";
import Property from "../models/PropertyModel";

const createProperty = async ({
  property,
}: {
  property: Property;
}): Promise<any> => {
  // try {
  const form = new FormData();

  form.append("title", property.title!);

  // @ts-ignore
  form.append("price", property.price);
  // @ts-ignore
  form.append("bathrooms", property.bathrooms!);
  // @ts-ignore
  form.append("bedrooms", property.bedrooms!);
  form.append("image", property.file!);
  form.append("description", property.description!);
  form.append("location", property.location!);

  let resp = await Axios.post("/api/properties", form, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  // console.log(resp)
  return resp.data;
  // } catch (error) {
  //   console.log(error);
  //   // return error.response.data;
  // }
};

const getProperties = async (): Promise<Property[]> => {
  // try {
  let resp: Property[] = (await (await Axios.get(`/api/properties`))
    .data) as Property[];

  return resp;
  // } catch (error) {
  //   return [];
  // }
};

const getProperty = async (key: string, id?: string) => {
  if (!id) return { errors: { msg: "Error getting property" } };

  let property = await (await Axios.get(`/api/properties/${id}`)).data;
  console.log(property);
  return property;
};

const like = async ({ id }: { id?: string }) => {
  if (!id) return null;
  let resp = await (await Axios.patch(`/api/properties/${id}/like`)).data;
  return resp;
};

export { createProperty, getProperties, getProperty, like };
