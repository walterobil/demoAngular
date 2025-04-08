--entidades para el inventario.
create table "inv".gen_empresas(
idEmpresa varchar(5) primary key,
nombre varchar(100) not null,
direccion varchar(200) not null,
direccionfacturacion varchar(200),
representantelegal varchar(100),
telefono varchar(50),
correoelectronico varchar(100),
codigopostal varchar(20),
estado varchar(3) CHECK(estado IN ('A','I','PEN','DES','CAN')),
principal varchar(1) CHECK(principal IN ('S','N')),
adiciono varchar(20) not null,
fechaadicion date default current_date
);

create table "inv".inv_sucursales(
idSucursal varchar(10) primary key,
idEmpresa varchar(5) not null,
descripcion varchar(100) not null,
direccion varchar(100),
telefono varchar(50),
encargado varchar(50),
estado varchar(3) CHECK(estado IN ('A','I','PEN','DES','CAN')),
constraint fk_SucursalXempresa foreign key (idEmpresa) references "Inventario".gen_empresas(idEmpresa)
);

create table "inv".inv_bodegas(
idBodega varchar(10),
idSucursal varchar(10),
descripcion varchar(100) not null,
direccion varchar(100),
telefono varchar(50),
encargado varchar(50),
estado varchar(3) CHECK(estado IN ('A','I','PEN','DES','CAN')),
constraint pk_bodegas primary key(idbodega,idsucursal),
constraint fk_sucursalesbodegas  foreign key (idSucursal) references "Inventario".inv_sucursales(idSucursal)
);

create table "inv".inv_categorias(
idCategoria varchar(5) primary key,
descripcion varchar(100) not null,
estado varchar(3) CHECK(estado IN ('A','I','PEN','DES','CAN')) 
);

create table "inv".inv_lineas(
idlinea varchar(5),
idcategoria varchar(5) not null,
descripcion varchar(100) not null,
garantia varchar(1),
conserie varchar(1),
comision numeric(10,2),
estado varchar(3) CHECK(estado IN ('A','I','PEN','DES','CAN')),
constraint pk_lineas primary key (idlinea,idcategoria), 
constraint fk_categoriaxlinea foreign key (idcategoria) references "Inventario".inv_categorias(idCategoria)
);

CREATE TABLE "inv".inv_productos (
    idProducto VARCHAR(20) not NULL,
    idbodega VARCHAR(10) not NULL,    
    idSucursal varchar(10) not null,
    idCategoria VARCHAR(5) not null,
    idlinea VARCHAR(30) not null,
    descripcion VARCHAR(100) NOT NULL,
    existencia NUMERIC NOT NULL,
    precionVenta NUMERIC(10,2),
    precioultcompra NUMERIC(10,2),
    preciopromedio NUMERIC(10,2),
    estatus VARCHAR(3) CHECK(estatus IN ('A','I','PEN','DES','CAN')),
    presentacion VARCHAR(100),
    unidadmedida VARCHAR(50),
    uso VARCHAR(50),
    comision NUMERIC(5,2),
    descuento NUMERIC(5,2),
    maximo NUMERIC,
    minimo NUMERIC,
    codigointernacional VARCHAR(100),
    color VARCHAR(30),
    talla VARCHAR(30),
    estilo VARCHAR(30),
    diasvencimiento NUMERIC,
    localizacion VARCHAR(50),
    adiciono VARCHAR(30) NOT NULL,
    fechaadicion DATE DEFAULT CURRENT_DATE,
    constraint PK_PRODUCTOS primary key (IDPRODUCTO),
    CONSTRAINT fk_lineas FOREIGN KEY (idLinea,idcategoria) REFERENCES "Inventario".inv_lineas(idlinea,idcategoria),
    CONSTRAINT fk_bodegas FOREIGN KEY (idbodega,idsucursal) REFERENCES "Inventario".inv_bodegas(idBodega,idsucursal)
);

drop table "inv".inv_productos;
drop table "inv".inv_bodegas; 
drop table "inv".inv_sucursales;
drop table "inv".gen_empresas;
drop table "inv".inv_lineas;
drop table "inv".inv_categorias; 


