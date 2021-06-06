enum Role {
    Doctor,
    Anestesista,
    Asistente,
    Administrativo
}

interface Staff {
    name: string,
    email: string,
    role: Role
}

const medico = {
    name: "Martin",
    email: "martin@test.com",
    role: Role.Doctor
}

const printStaff = (staff: Staff) => {
    console.log(staff);
}

printStaff(medico)