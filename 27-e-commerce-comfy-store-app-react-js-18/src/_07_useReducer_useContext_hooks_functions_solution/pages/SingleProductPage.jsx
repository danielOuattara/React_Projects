import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useProductsContext } from "../context";
import { single_product_url as url } from "./../utilities/constants";
import { formatPrice } from "../utilities/helpers";
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
} from "../components";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function SingleProductPage() {
  return <h4>single product page</h4>;
}
