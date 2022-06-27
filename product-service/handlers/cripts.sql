--create table products (
--	id uuid not null default uuid_generate_v4() primary key,
--    title text not null,
--    description text,
--    price integer
--);

--create extension if not exists "uuid-ossp";

--create table stocks (
--	product_id uuid,
--    count integer,
--    foreign key ("product_id") references "products"("id")
--);

--insert into products (title, description, price) values
--('Видеорегистратор 2E-Drive 550 Magnet (2E-DRIVE550MAGNET)', 'Высокое качество записи обеспечивает сенсор Sony IMX323 и объектив с шестью качественными стеклянными линзами и инфракрасным фильтром. Высокая скорость работы - заслуга процессора Novatek NTK96658. Технология Wide Dynamic Range отвечает за расширенный динамический диапазон и запись более детализированного видео, независимо от уровня освещения. Угол обзора в 150° позволяет фиксировать все происходящее перед автомобилем, не упустив ни одной важной детали.',
--  1189)
--insert into products (title, description, price) values
--('Видеорегистратор 2E-Drive 700 Magnet (2E-DRIVE700MAGNET)', 'Высокое качество записи обеспечивает сенсор Sony IMX323 и объектив с шестью качественными стеклянными линзами и инфракрасным фильтром. Высокая скорость работы - заслуга процессора Novatek NTK96658. Технология Wide Dynamic Range отвечает за расширенный динамический диапазон и запись более детализированного видео, независимо от уровня освещения. Угол обзора в 150° позволяет фиксировать все происходящее перед автомобилем, не упустив ни одной важной детали.', 1003)

--insert into products (title, description, price) values
--('Видеорегистратор 2E Drive 150 (2E-DRIVE150)',
-- 'Видеорегистратор с поворотным держателем, Full HD-записью, матрицей GalaxyCore GC2053, дисплеем и удобным интерфейсом управления. Устройство оснащено объективом с инфракрасным фильтром, микрофоном, динамиком и датчиком G, который реагирует на удары и защищает фрагменты видео ДТП от перезаписи.',
-- 989)

-- insert into products (title, description, price) values
--('Видеорегистратор 2E Drive 530 (2E-DRIVE530)',
-- 'Видеорегистратор с поворотным держателем, Full HD-записью, матрицей Sony IMX 323, дисплеем и удобным интерфейсом управления. Устройство оснащено объективом с инфракрасным фильтром, микрофоном, динамиком и датчиком G, который реагирует на удары и защищает фрагменты видео ДТП от перезаписи.',
-- 1049)

--  insert into products (title, description, price) values
--('Видеорегистратор 2E Drive 530 (2E-DRIVE530)',
-- 'Видеорегистратор с поворотным держателем, Full HD-записью, матрицей Sony IMX 323, дисплеем и удобным интерфейсом управления. Устройство оснащено объективом с инфракрасным фильтром, микрофоном, динамиком и датчиком G, который реагирует на удары и защищает фрагменты видео ДТП от перезаписи.',
-- 1049)

--   insert into products (title, description, price) values
--('Видеорегистратор 2E Drive 710 Magnet (2E-DRIVE710MAGNET)',
-- 'Видеорегистратор с поворотным держателем, Full HD-записью, матрицей Sony IMX 323, дисплеем и удобным интерфейсом управления. Устройство оснащено объективом с инфракрасным фильтром, микрофоном, динамиком и датчиком G, который реагирует на удары и защищает фрагменты видео ДТП от перезаписи.',
-- 2099)

--    insert into products (title, description, price) values
--('Видеорегистратор 2E Drive 730 Magnet (2E-DRIVE730MAGNET)',
-- 'Видеорегистратор с поворотным держателем, Full HD-записью, матрицей Sony IMX 323, дисплеем и удобным интерфейсом управления. Устройство оснащено объективом с инфракрасным фильтром, микрофоном, динамиком и датчиком G, который реагирует на удары и защищает фрагменты видео ДТП от перезаписи.',
-- 2199)
--
--     insert into products (title, description, price) values
--('Видеорегистратор 2E Drive 750 Magnet (2E-DRIVE750MAGNET)',
-- 'Видеорегистратор с магнитным креплением, 4K-записью (с интерполяцией), матрицей OmniVision, сенсорным OLED-дисплеем, удобным интерфейсом управления, а также модулями Wi-Fi и GPS, который интегрирован в держатель. Для управления библиотеками видео и фотоматериалов доступны приложения в Google Play и AppStore. Устройство оснащено объективом с инфракрасным фильтром, микрофоном, динамиком и датчиком G, который реагирует на удары и защищает фрагменты видео ДТП от перезаписи.',
-- 2599)

--      insert into products (title, description, price) values
--('Компрессор автомобильный Einhell CC-AV',
-- 'Компрессор Einhell CC-AC 12 V - автокомпрессор Einhell CC-AC — это компактный автомобильный компрессор. Его легко возить с собой в багажнике. Он выдает мощность до 18 бар. В качестве питания используется бортовая сеть машины и гнездо прикуривателя. На верхней грани находится манометр, который отображает текущее давление. Длины кабеля в 2.9 метра, обычно хватает для того, чтобы дотянуться ко всем колесам',
-- 599)

--insert into stocks (product_id, count) values ('6480c70b-d9cf-42ac-933e-2318cd0000f7', 4)
--insert into stocks (product_id, count) values ('967facfc-8230-4bb4-b953-cda61d848f73', 6)
--insert into stocks (product_id, count) values ('cdfd55a9-4281-4a61-ad04-5874334c3722', 7)
--insert into stocks (product_id, count) values ('19274e0f-5e6f-4714-83c3-a5f0e7db16ae', 12)
--insert into stocks (product_id, count) values ('6c814a68-7ce1-480d-a5e1-a00d0e5a4618', 7)
--insert into stocks (product_id, count) values ('935e231e-0b3a-4862-9ee2-113d8195854c', 8)
--insert into stocks (product_id, count) values ('b16d0e46-ffbd-4159-ad97-4d4d2a1a9a4a', 2)
--insert into stocks (product_id, count) values ('471acb45-4b8b-4591-a767-29cc2a62969c', 3)

-- select p.id, p.title, p.description, p.price, s.count from products p, stocks s where p.id = s.product_id
--select p.id, p.title, p.description, p.price, s.count from products p, stocks s where p.id = '59c126a2-2fb0-4908-a6a7-db791c4fb94e' and p.id = s.product_id

--select p.id, p.title, p.description, p.price from products p where p.id = '6c814a68-7ce1-480d-a5e1-a00d0e5a4618'

--select id, title, description, price from products
--select products.id, products.title, products.description, products.price, stocks.count from products left join stocks on products.id = stocks.product_id
