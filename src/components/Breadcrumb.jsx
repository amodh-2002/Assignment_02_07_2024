import React from "react";
import { Breadcrumbs as MUIBreadcrumbs, Link, Typography } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <div className="">
      <MUIBreadcrumbs aria-label="breadcrumb" sx={{ padding: 2 }}>
        <Link component={RouterLink} to="/" color="inherit">
          Home
        </Link>
        {pathnames.map((value, index) => {
          const last = index === pathnames.length - 1;
          const to = `/${pathnames.slice(0, index + 1).join("/")}`;

          return last ? (
            <Typography color="textPrimary" key={to}>
              {value.charAt(0).toUpperCase() + value.slice(1)}
            </Typography>
          ) : (
            <Link component={RouterLink} to={to} color="inherit" key={to}>
              {value.charAt(0).toUpperCase() + value.slice(1)}
            </Link>
          );
        })}
      </MUIBreadcrumbs>
    </div>
  );
};

export default Breadcrumbs;
