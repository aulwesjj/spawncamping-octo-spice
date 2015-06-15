public JsonResult GetSalesList()
        {
            PlayGroundEntities e = new PlayGroundEntities();
            return Json(e.ProductSale_DetailsSelectAll(), JsonRequestBehavior.AllowGet);
        }
