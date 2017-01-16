
function addTableElem(elem, user) {
    elem.append(
        `<tr>
            <td><img src='${user.picture}'></td>
            <td>${user.name.first} ${user.name.last}</td>
            <td>${user.isActive}</td>
            <td>${user.about}</td>
            <td>${user.balance}</td>
            <td>${user.age}</td>
            <td>${user.registered}</td>
            <td>${user.company}</td>
            <td><a href='mailto:${user.email}'>${user.email}</a></td>
            <td><a href="tel:${user.phone}"> ${user.phone}</a></td>
            <td>${user.address}</td>
        </tr>`
        );
}


module.exports = addTableElem;