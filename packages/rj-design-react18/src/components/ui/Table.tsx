/* eslint-disable @typescript-eslint/ban-ts-comment */
import * as React from "react"

import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import { Checkbox } from './Checkbox'
import type { CheckedState } from "@radix-ui/react-checkbox"
import { TriangleUpIcon } from "../icon/TriangleUpIcon"
import { TriangleDownIcon } from "../icon/TriangleDownIcon"
import { Button } from "./Button"
import { FilterIcon } from "../icon/FilterIcon"
import { Input } from "./Input"
import { Separator } from "./Separator"
import { useMemo, useState } from "react"
import { Popover, PopoverContent, PopoverTrigger } from "./Popover"


// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface TableItem extends Record<string, any> {
  key: string
}

export interface TableColumn<T extends TableItem> {
  title: string,
  dataIndex: keyof T,
  key: string,
  sorter?: (a: T, b: T) => number,
  sortDirections?: ['descend'] | ['ascend', 'descend'] | ['ascend'] | ['descend', 'ascend'] | [],
  onFilter?: (value: string, record: T) => boolean
}

const tableVariants = cva(
  "",
  {
    variants: {
      variant: {
        default: '',
      },
      direction: {
        start: '[&_[data-slot=table-head]]:flex [&_[data-slot=table-head]]:flex-1  [&_[data-slot=table-head]]:justify-start [&_[data-slot=table-head]]:items-center [&_[data-slot=table-cell]]:flex [&_[data-slot=table-cell]]:flex-1 [&_[data-slot=table-cell]]:justify-start [&_[data-slot=table-cell]]:items-center',
        center: '[&_[data-slot=table-head]]:flex [&_[data-slot=table-head]]:flex-1  [&_[data-slot=table-head]]:justify-center [&_[data-slot=table-head]]:items-center [&_[data-slot=table-cell]]:flex [&_[data-slot=table-cell]]:flex-1 [&_[data-slot=table-cell]]:justify-center [&_[data-slot=table-cell]]:items-center',
        end: '[&_[data-slot=table-head]]:flex [&_[data-slot=table-head]]:flex-1  [&_[data-slot=table-head]]:justify-end [&_[data-slot=table-head]]:items-center [&_[data-slot=table-cell]]:flex [&_[data-slot=table-cell]]:flex-1 [&_[data-slot=table-cell]]:justify-end [&_[data-slot=table-cell]]:items-center'
      }
    },
    defaultVariants: {
      variant: 'default'
    },
  })

function Table({ className,
  direction, ...props }: React.ComponentProps<"table">
  & VariantProps<typeof tableVariants>) {
  return (
    <div
      data-slot="table-container"
      className="relative w-full overflow-x-auto"
    >
      <table
        data-slot="table"
        className={cn("w-full caption-bottom text-sm",
          className,
          tableVariants({ direction }))}
        {...props}
      />
    </div>
  )
}

function TableHeader({
  className,
  ...props }: React.ComponentProps<"thead">) {
  return (
    <thead
      data-slot="table-header"
      className={cn("[&_tr]:border-b", className)}
      {...props}
    />
  )
}

function TableBody({ className, ...props }: React.ComponentProps<"tbody">) {
  return (
    <tbody
      data-slot="table-body"
      className={cn("", className)}
      {...props}
    />
  )
}

function TableFooter({ className, ...props }: React.ComponentProps<"tfoot">) {
  return (
    <tfoot
      data-slot="table-footer"
      className={cn(
        "bg-muted/50 border-t font-medium [&>tr]:last:border-b-0",
        className
      )}
      {...props}
    />
  )
}

function TableRow({ className, ...props }: React.ComponentProps<"tr">) {
  return (
    <tr
      data-slot="table-row"
      className={cn(
        "hover:bg-muted/50 data-[state=selected]:bg-white border-b transition-colors flex flex-row gap-px",
        className
      )}
      {...props}
    />
  )
}

function TableHead({ className, ...props }: React.ComponentProps<"th">) {
  return (
    <th
      data-slot="table-head"
      className={cn(
        "bg-fill hover:bg-scroll",
        "text-secondary-information h-10 px-2 align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        "first:rounded-tl-1 last:rounded-tr-1 only:rounded-t-1",
        'flex flex-row items-center justify-center gap-2',
        className
      )}
      {...props}
    />
  )
}

function TableCell({ className, ...props }: React.ComponentProps<"td">) {
  return (
    <td
      data-slot="table-cell"
      className={cn(
        "p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className
      )}
      {...props}
    />
  )
}

function TableCaption({
  className,
  ...props
}: React.ComponentProps<"caption">) {
  return (
    <caption
      data-slot="table-caption"
      className={cn("text-muted-foreground mt-4 text-sm", className)}
      {...props}
    />
  )
}

function TableGroup<T extends TableItem>({
  caption,
  dataSource,
  columns,
  showSelected = false,
  selectdType = 'checkbox',
  selectedKeys = [],
  onSelectedChange,
  ...prop
}: React.ComponentProps<typeof Table> & {
  caption: string,
  dataSource: T[],
  columns: TableColumn<T>[],
  showSelected?: boolean,
  selectdType?: 'checkbox' | 'radio',
  selectedKeys: string[],
  onSelectedChange?: (selectedKeys: string[]) => void,
  showPage?: boolean,
}) {

  const [data, setData] = React.useState<T[]>(dataSource);
  const [filters, setFilters] = React.useState<Record<string, string>>({});
  const onSelect = (key: string, state: boolean) => {
    if (!showSelected) return;
    let currentSelected: string[] = [];
    if (selectdType === 'checkbox') {
      if (state) currentSelected = [...selectedKeys, key]
      if (!state) currentSelected = selectedKeys.filter(x => x !== key);
    } else {
      currentSelected = [key]
    }
    if (onSelectedChange) onSelectedChange(currentSelected)
  }
  const onSelectedAll = (state: boolean) => {
    let currentSelected: string[] = [];
    if (state) {
      currentSelected = filteredDataSource.map(x => x.key);
    } else {
      currentSelected = [];
    }
    if (onSelectedChange) onSelectedChange(currentSelected)
  }
  const [isAll, setIsAll] = React.useState<CheckedState>(false);
  const [sortAt, setSortAt] = React.useState<string | undefined>();
  const [rule, setRule] = React.useState<'descend' | 'ascend' | undefined>();
  const updateSort = (columnKey: string, currentRule: 'descend' | 'ascend') => {
    if (columnKey === sortAt && currentRule === rule) {
      setData(dataSource);
      setSortAt(undefined);
      setRule(undefined);
      return;
    }
    setSortAt(columnKey);
    setRule(currentRule);

    const column = columns.find(col => col.key === columnKey);
    if (!column) return;

    const newData = [...dataSource].sort((a, b) => {
      let result = 0;

      if (column.sorter) {
        result = column.sorter(a, b);
      } else {
        const valueA = a[column.dataIndex];
        const valueB = b[column.dataIndex];

        if (valueA == null || valueB == null) {
          result = valueA == null ? -1 : 1;
        } else {
          if (typeof valueA === 'number' && typeof valueB === 'number') {
            result = valueA - valueB;
            //@ts-expect-error
          } else if (valueA instanceof Date && valueB instanceof Date) {
            result = valueA.getTime() - valueB.getTime();
          } else {
            result = String(valueA).localeCompare(String(valueB), 'zh-CN', { numeric: true });
          }
        }
      }
      return currentRule === 'ascend' ? result : -result;
    });

    setData(newData);
  }
  const [filterAt, setFilterAt] = React.useState<string | undefined>();
  const showFilterInput = (key: string) => {
    if (filterAt === key) {
      setFilterAt(undefined);
      setFilterStr(undefined);
    } else {
      setFilterAt(key);
    }
  }
  const [filterStr, setFilterStr] = useState<string | undefined>();
  const applyFilter = (columnKey: string, filterValue: string) => {
    const newFilters = { ...filters };
    if (filterValue && filterValue.trim()) {
      newFilters[columnKey] = filterValue.trim();
    } else {
      delete newFilters[columnKey];
    }
    setFilters(newFilters);
    setFilterAt(undefined);
    setFilterStr(undefined);
  };
  const filteredDataSource = useMemo(() => {
    let result = [...data];
    Object.entries(filters).forEach(([columnKey, filterValue]) => {
      const column = columns.find(col => col.key === columnKey);
      if (!column || !column.onFilter) return;

      result = result.filter(record =>
        column.onFilter!(filterValue, record)
      );
    });

    return result;
  }, [data, filters, columns]);
  React.useEffect(() => {
    if (filteredDataSource.length === 0) {
      setIsAll(false);
      return;
    }
    if (selectedKeys.length === 0) {
      setIsAll(false);
      return;
    }

    const filteredKeys = filteredDataSource.map(item => item.key);
    const selectedInFiltered = selectedKeys.filter(key => filteredKeys.includes(key));

    if (selectedInFiltered.length === filteredDataSource.length) {
      setIsAll(true);
      return;
    }
    if (selectedInFiltered.length > 0) {
      setIsAll('indeterminate');
      return;
    }
    setIsAll(false);
  }, [filteredDataSource, selectedKeys]);
  React.useEffect(() => {
    setData(dataSource);
  }, [dataSource]);

  return <Table {...prop}>
    <TableCaption>{caption}</TableCaption>
    <TableHeader>
      <TableRow>
        {showSelected && (
          <TableHead>
            {selectdType === 'checkbox' ? (
              <Checkbox variant={'default'} checked={isAll} onCheckedChange={onSelectedAll} />
            ) : (
              <div></div>
            )}
          </TableHead>
        )}
        {columns.map((column) => (
          <TableHead key={column.key}>
            <span>{column.title}</span>
            {(column.sorter && (!column.sortDirections || (column.sortDirections?.length ?? 0) > 0)) && (
              <div className="inline-flex flex-col gap-[2px]">
                {
                  (!column.sortDirections || (column.sortDirections as string[])!.includes('ascend')) &&
                  <Button
                    variant={'transparent'}
                    size={'link'}
                    onClick={() => updateSort(column.key, 'ascend')}
                  >
                    <TriangleUpIcon className={cn(
                      'size-1.5',
                      (column.key === sortAt && rule === 'ascend') ? 'text-primary' : 'text-secondary-information'
                    )} />
                  </Button>
                }
                {
                  (!column.sortDirections || (column.sortDirections as string[])!.includes('descend')) &&
                  <Button
                    variant={'transparent'}
                    size={'link'}
                    onClick={() => updateSort(column.key, 'descend')}
                  >
                    <TriangleDownIcon width={6} height={5} className={cn(
                      'size-1.5',
                      (column.key === sortAt && rule === 'descend') ? 'text-primary' : 'text-secondary-information'
                    )} />
                  </Button>
                }
              </div>
            )}
            {column.onFilter &&
              <Popover variant="primary">
                <PopoverTrigger asChild >
                  <Button variant={'transparent'} size={'link'} onClick={() => {
                    showFilterInput(column.key)
                  }}>
                    <FilterIcon className={cn("size-2.5",
                      (filters[column.key]) ? 'text-primary' : 'text-disabled')} />
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  side={'right'}
                  className="w-full">
                  <div className="flex flex-1 flex-col gap-2 ">
                    <Input
                      variant={'primary'}
                      format={'sm'}
                      placeholder="请输入"
                      value={filterStr || filters[column.key] || ''}
                      onChange={(e) => {
                        setFilterStr(e.target.value)
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          applyFilter(column.key, filterStr || '');
                        }
                      }}
                    />
                    <Separator orientation='horizontal' />
                    <div className="flex justify-end gap-1 p-0.5">
                      <Button
                        variant={'primary'}
                        size={'sm'}
                        onClick={() => {
                          applyFilter(column.key, filterStr || '');
                        }}
                      >
                        确认
                      </Button>
                    </div>
                    {filters[column.key] && (
                      <Button
                        variant={'ghost'}
                        size={'sm'}
                        onClick={() => {
                          applyFilter(column.key, '');
                        }}
                      >
                        清除过滤
                      </Button>
                    )}
                  </div>
                </PopoverContent>
              </Popover>
            }
          </TableHead>
        ))}
      </TableRow>
    </TableHeader>
    <TableBody>
      {filteredDataSource.map((record, index) => (
        <TableRow key={record.key || index}>
          {showSelected && (
            <TableCell>
              {selectdType === 'checkbox' ? (
                <Checkbox
                  variant={'default'}
                  checked={selectedKeys.includes(record.key)}
                  onCheckedChange={(e) => onSelect(record.key, e as boolean)}
                />
              ) : (
                <div
                  className={cn(
                    'size-4 rounded-full border border-border-hover hover:border-primary cursor-pointer flex items-center justify-center',
                    selectedKeys.includes(record.key) && 'border-primary'
                  )}
                  onClick={() => onSelect(record.key, true)}
                >
                  {selectedKeys.includes(record.key) && (
                    <div className="size-2 rounded-full bg-primary"></div>
                  )}
                </div>
              )}
            </TableCell>
          )}
          {columns.map((column) => (
            <TableCell key={column.key}>
              {record[column.dataIndex]}
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  </Table>
}

export {
  TableGroup,
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}
