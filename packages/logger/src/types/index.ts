/**
 * A log function that can be dynamically enabled and redirected.
 */
export interface Debugger {
  /**
   * True if this logger is active and logging.
   */
  enabled: boolean
  /**
   * Used to cleanup/remove this logger.
   */
  destroy: () => boolean
  /**
   * The current log method. Can be overridden to redirect output.
   */
  log: (...args: any[]) => void
  /**
   * The namespace of this logger.
   */
  namespace: string
  /**
   * Extends this logger with a child namespace.
   * Namespaces are separated with a ':' character.
   */
  extend: (namespace: string) => Debugger

  /**
   * Logs the given arguments to the `log` method.
   */
  (...args: any[]): void
}

/**
 * A simple mechanism for enabling logging.
 * Intended to mimic the publicly available `debug` package.
 */
export interface Debug {
  /**
   * The default log method (defaults to console)
   */
  log: (...args: any[]) => void
  /**
   * Enables a particular set of namespaces.
   * To enable multiple separate them with commas, e.g. "info,debug".
   * Supports wildcards, e.g. "halo:*"
   * Supports skip syntax, e.g. "halo:*,-halo:storage:*" will enable
   * everything under halo except for things under halo:storage.
   */
  enable: (namespaces: string) => void
  /**
   * Checks if a particular namespace is enabled.
   */
  enabled: (namespace: string) => boolean
  /**
   * Disables all logging, returns what was previously enabled.
   */
  disable: () => string

  /**
   * Creates a new logger with the given namespace.
   */
  (namespace: string): Debugger
}
