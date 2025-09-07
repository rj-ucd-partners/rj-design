import * as React from "react"

import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"
import { Checkbox } from './checkbox'
import type { CheckedState } from "@radix-ui/react-checkbox"
import { TriangleUpIcon } from "../icon/TriangleUpIcon"
import { TriangleDownIcon } from "../icon/TriangleDownIcon"
import { Button } from "./button"

export interface TableItem {
  key: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

export interface TableColumn {
  title: string,
  dataIndex: string,
  key: string,

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
        'flex flex-row items-center justify-center gap-0.5',
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

function TableGroup({
  caption,
  dataSource,
  columns,
  showSelected = false,
  selectdType = 'checkbox',
  selectedKeys = [],
  onSelectedChange,
  showSort = false,
  ...prop
}: React.ComponentProps<typeof Table> & {
  caption: string,
  dataSource: TableItem[],
  columns: TableColumn[],
  showSelected?: boolean,
  selectdType?: 'checkbox' | 'radio',
  selectedKeys: string[],
  onSelectedChange?: (selectedKeys: string[]) => void,
  showSort: boolean,
}) {

  const [data, setData] = React.useState<TableItem[]>(dataSource);
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
      currentSelected = dataSource.map(x => x.key);
    } else {
      currentSelected = [];
    }
    if (onSelectedChange) onSelectedChange(currentSelected)
  }

  const [isAll, setIsAll] = React.useState<CheckedState>(false);
  React.useEffect(() => {
    if (dataSource.length === 0) {
      setIsAll(false);
      return;
    }
    if (selectedKeys.length === 0) {
      setIsAll(false);
      return;
    }
    if (dataSource.length === selectedKeys.length) {
      setIsAll(true);
      return;
    }
    setIsAll('indeterminate');
  }, [dataSource, selectedKeys])

  const [sortAt, setSortAt] = React.useState<string | undefined>();
  const [rule, setRult] = React.useState<'desc' | 'asc'>();

  const updateSort = (key: string, currentRule: 'desc' | 'asc') => {
    setSortAt(key);
    setRult(currentRule);
    const newData = [...dataSource].sort((a, b) => {
      const [valueA, valueB] = [a[key], b[key]];

      // 处理空值
      if (valueA == null || valueB == null) {
        return valueA == null ? (currentRule === 'asc' ? -1 : 1) : (currentRule === 'asc' ? 1 : -1);
      }

      // 统一比较逻辑
      let result;
      if (typeof valueA === 'number' && typeof valueB === 'number') {
        result = valueA - valueB;
      } else if (valueA instanceof Date && valueB instanceof Date) {
        result = valueA.getTime() - valueB.getTime();
      } else {
        result = String(valueA).localeCompare(String(valueB), 'zh-CN', { numeric: true });
      }

      return currentRule === 'asc' ? result : -result;
    });

    setData(newData);
  }

  return <Table {...prop}>
    <TableCaption>{caption}</TableCaption>
    <TableHeader>
      <TableRow>
        {
          showSelected &&
          <TableHead>
            {
              selectdType === 'checkbox' ?
                <Checkbox variant={'default'} checked={isAll} onCheckedChange={onSelectedAll} /> :
                <div></div>
            }
          </TableHead>
        }
        {
          columns.map((item) => {
            return <TableHead key={item.key}>
              <span>{item.title}</span>
              {showSort &&
                <div className="inline-flex flex-col gap-[2px]">
                  <Button variant={'transparent'} size={'link'} onClick={() => {
                    updateSort(item.key, 'asc')
                  }}><TriangleUpIcon className={cn(
                    'size-2',
                    (item.key === sortAt && rule === 'asc') ? 'text-primary' : 'text-secondary-information'
                  )} /></Button>
                  <Button variant={'transparent'} size={'link'} onClick={() => {
                    updateSort(item.key, 'desc')
                  }}>
                    <TriangleDownIcon className={cn(
                      'size-2',
                      (item.key === sortAt && rule === 'desc') ? 'text-primary' : 'text-secondary-information'
                    )} /></Button>
                </div>}
            </TableHead>
          })
        }
      </TableRow>
    </TableHeader>
    <TableBody>
      {data.map((record, index) => (
        showSelected ?
          <TableRow key={record.key || index}>
            {
              selectdType === 'checkbox' ?
                <TableCell><Checkbox variant={'default'} checked={selectedKeys.includes(record.key)} onCheckedChange={(e) => {
                  onSelect(record.key, e as boolean)
                }} /></TableCell> :
                <TableCell>
                  <div className={cn('size-4 rounded-full border border-border-hover hover:border-primary cursor-pointer flex items-center justify-center',
                    selectedKeys.includes(record.key) && 'border-primary'
                  )} onClick={() => { onSelect(record.key, true) }}>
                    {
                      selectedKeys.includes(record.key) &&
                      <div className="size-2 rounded-full bg-primary"></div>
                    }
                  </div>
                </TableCell>
            }
            {columns.map((column) => (
              <TableCell key={column.key}>
                {record[column.dataIndex]}
              </TableCell>
            ))}
          </TableRow>
          :
          <TableRow key={record.key || index} >
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
