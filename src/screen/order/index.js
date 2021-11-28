import { React, useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import foodApi from '../../api/foodApi';
import FilterProductComponent from '../../components/order/FilterProductComponent';
import ListProductComponent from '../../components/order/ListProductComponent';
import SearchProductComponent from '../../components/order/SearchProductComponent';
import BannerProductComponent from '../../layouts/components/banner/index';
import Spinner from '../../layouts/components/loading/Spinner';
const queryString = require('query-string');

export default function Order() {
  const [listproduct, setlistProduct] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [category, setCategory] = useState('best-foods');
  const [paginations, setPaginations] = useState({
    _limit: 16,
    _page: 1,
    _totalRows: 20,
  });

  const queryParams = useMemo(() => {
    const params = queryString.parse(location.search);
    return {
      ...params,
      _page: Number.parseInt(params._page) || 1,
      _limit: Number.parseInt(params._limit) || 16,
    }
  }, [location.search]);

  const [filter, setFilter] = useState({
    category: category,
    ...queryParams,
  });



  // console.log(queryParams);
  // console.log(filter)

  useEffect(() => {
    (async () => {
      const res = Object.fromEntries(Object.entries(filter).slice(1));
      const { data, pagination } = await foodApi.getAll(category, res);
      setlistProduct(data);
      setPaginations(pagination);
      setIsLoading(true);
    })()
  }, [category, filter]);

  const handleOnClick = (data) => {
    data && setCategory(data);
    const newFilters = {
      _page: 1,
      _limit: 16,
      category: data,
    }
    setFilter(newFilters);
    setIsLoading(false);
  }

  const handleSubmit = (data) => {
    data && setCategory('our-foods');
    const newFilters = {
      ...filter,
      _page: 1,
      category: 'our-foods',
      name_like: data,
    }
    setFilter(newFilters);

  }
  const switchPrice = (value) => {
    const actions = {
      Under100() {
        const newFilters = {
          _page: 1,
          _limit: 16,
          category: category,
          price_lte: 100
        }
        setFilter(newFilters);
      },
      To50100() {
        const newFilters = {
          _page: 1,
          _limit: 16,
          category: category,
          price_gte: 50,
          price_lte: 100
        }
        setFilter(newFilters);
      },
      Under50() {
        const newFilters = {
          _page: 1,
          _limit: 16,
          category: category,
          price_lte: 50
        }
        setFilter(newFilters);
      },
      Above100() {
        const newFilters = {
          _page: 1,
          _limit: 16,
          category: category,
          price_gte: 100
        }
        setFilter(newFilters);
      },
    }
    const fn = actions[value]
    return fn()
  }


  const handlePriceFilter = (value) => {
    switchPrice(value);
    // console.log(value);
  }

  useEffect(() => {
    navigate({
      search: queryString.stringify(filter),
    })
  }, [navigate, filter]);

  const handlePageChange = (selected) => {
    const newFilters = {
      ...filter,
      _page: selected
    }
    selected && setFilter(newFilters);
  }

  return (
    <>
      <BannerProductComponent category={category} />
      <div className="grid grid-cols-[1fr,4fr] gap-4 container mx-auto mt-20">
        <FilterProductComponent handleOnClick={handleOnClick} handlePriceFilter={handlePriceFilter} />
        <SearchProductComponent handleSubmit={handleSubmit} />
        {isLoading ?
          <ListProductComponent listproduct={listproduct} handlePageChange={handlePageChange} paginations={paginations} forcePage={filter._page} />
          : <Spinner />
        }
      </div>
    </>
  )
}
