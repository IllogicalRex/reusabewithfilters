select  * from Projects

insert into projects (Name, StartDate, EndDate, ProyectLeader, IsActive)
		VALUES ('JOEL', '2019-02-02', '2019-02-02', 'RUBEN', 1)
insert into projects (Name, StartDate, EndDate, ProyectLeader, IsActive)
		VALUES ('JOSUE', '2019-25-02', '2019-02-02', 'CARLOS', 1)
insert into projects (Name, StartDate, EndDate, ProyectLeader, IsActive)
		VALUES ('ANDRES', '2018-15-01', '2018-20-03', 'CARLOS', 1)
insert into projects (Name, StartDate, EndDate, ProyectLeader, IsActive)
		VALUES ('MARIA', '2018-15-01', '2019-20-03', 'CARLOS', 1)

alter PROCEDURE GetByFilter
	--@pro_id as int,
	@name as varchar(100),
	@daystart as int,
	@monthstart as int,
	@yearstart as int,
	@dayend as int,
	@monthend as int,
	@yearend as int,
	@proyectleader as varchar(100)
AS
	SELECT Name, StartDate, EndDate, ProyectLeader, IsActive
	FROM Projects
	WHERE ((name like '%'+@name+'%') or @name like '') and 
			((day(StartDate) = @daystart) or (@daystart=0)) and
			((month(StartDate) = @monthstart) or (@monthstart=0)) and
			((year(StartDate) = @yearstart) or (@yearstart=0)) and
			((day(EndDate) = @dayend) or (@dayend=0)) and
			((month(EndDate) = @monthend) or (@monthend=0)) and
			((year(EndDate) = @yearend) or (@yearend=0)) AND
			((ProyectLeader like '%'+@proyectleader+'%') or @proyectleader like '')
GO

alter PROCEDURE GetByFilterDate
	--@pro_id as int,
	@daystart as int,
	@monthstart as int,
	@yearstart as int,
	@dayend as int,
	@monthend as int,
	@yearend as int
AS
	SELECT Name, StartDate, EndDate, ProyectLeader
	FROM Projects
	WHERE ((day(StartDate) = @daystart) or (@daystart=0)) and
	((month(StartDate) = @monthstart) or (@monthstart=0)) and
	((year(StartDate) = @yearstart) or (@yearstart=0)) and
	((day(EndDate) = @dayend) or (@dayend=0)) and
	((month(EndDate) = @monthend) or (@monthend=0)) and
	((year(EndDate) = @yearend) or (@yearend=0))
	
	
GO

exec GetByFilter '',0,0,2018,0,0,2019,''

exec GetByFilterDate 02,0,2019,0,0,0

JOEL	2019-02-02 00:00:00.000	2019-02-02 00:00:00.000	RUBEN	1
JOEL	2019-02-02 00:00:00.000	2019-02-02 00:00:00.000	CARLOS	1
JOSUE	2019-02-25 00:00:00.000	2019-02-02 00:00:00.000	CARLOS	1
ANDRES	2018-01-15 00:00:00.000	2018-03-20 00:00:00.000	CARLOS	1