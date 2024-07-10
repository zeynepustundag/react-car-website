import React from 'react'

import { Link, useLocation } from "react-router-dom"

const BreadCrumbs = () => {

    const location = useLocation();
    // let crumbLink = ""
    const pathnames = location.pathname.split("/")
        .filter((crumb) => crumb !== "")

    return (
        <div className='bread-crumbsdiv'>
            {pathnames.map((crumb, index) => {
                // crumbLink += `${crumb}`;
                const breadcrumbPath = `/${pathnames.slice(0, index + 1).join('/')}`;
                const isLastCrumb = index === pathnames.length - 1; //isLastCrumb= true or false
                return (
                    <div key={index}>
                        {crumb === "home" ?
                            <div>
                                <Link className="bread-crumbs-link" to="/">{crumb}</Link>
                                {isLastCrumb ? "" : <span> /</span>}
                            </div>
                            :
                            <div>
                                <Link className="bread-crumbs-link" to={breadcrumbPath}>{crumb}</Link>
                                {isLastCrumb ? "" : <span> /</span>}
                            </div>
                        }
                    </div>
                )
            })
            }
        </div>
    )
}

export default BreadCrumbs