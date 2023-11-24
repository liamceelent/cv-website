import React from "react";

const UpHoc = OrgHoc => {
    class NewHoc extends React.Component {
        render () {
            return <OrgHoc />
        }
    }

    return NewHoc
}