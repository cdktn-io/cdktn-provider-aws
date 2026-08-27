# `prometheusScraperLoggingConfiguration` Submodule <a name="`prometheusScraperLoggingConfiguration` Submodule" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrometheusScraperLoggingConfiguration <a name="PrometheusScraperLoggingConfiguration" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_scraper_logging_configuration aws_prometheus_scraper_logging_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.Initializer"></a>

```typescript
import { prometheusScraperLoggingConfiguration } from '@cdktn/provider-aws'

new prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration(scope: Construct, id: string, config: PrometheusScraperLoggingConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig">PrometheusScraperLoggingConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig">PrometheusScraperLoggingConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.putLoggingDestination">putLoggingDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.resetLoggingDestination">resetLoggingDestination</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.resetScraperComponents">resetScraperComponents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putLoggingDestination` <a name="putLoggingDestination" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.putLoggingDestination"></a>

```typescript
public putLoggingDestination(value: IResolvable | PrometheusScraperLoggingConfigurationLoggingDestination[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.putLoggingDestination.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestination">PrometheusScraperLoggingConfigurationLoggingDestination</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.putTimeouts"></a>

```typescript
public putTimeouts(value: PrometheusScraperLoggingConfigurationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeouts">PrometheusScraperLoggingConfigurationTimeouts</a>

---

##### `resetLoggingDestination` <a name="resetLoggingDestination" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.resetLoggingDestination"></a>

```typescript
public resetLoggingDestination(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetScraperComponents` <a name="resetScraperComponents" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.resetScraperComponents"></a>

```typescript
public resetScraperComponents(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a PrometheusScraperLoggingConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.isConstruct"></a>

```typescript
import { prometheusScraperLoggingConfiguration } from '@cdktn/provider-aws'

prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.isTerraformElement"></a>

```typescript
import { prometheusScraperLoggingConfiguration } from '@cdktn/provider-aws'

prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.isTerraformResource"></a>

```typescript
import { prometheusScraperLoggingConfiguration } from '@cdktn/provider-aws'

prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.generateConfigForImport"></a>

```typescript
import { prometheusScraperLoggingConfiguration } from '@cdktn/provider-aws'

prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a PrometheusScraperLoggingConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PrometheusScraperLoggingConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PrometheusScraperLoggingConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_scraper_logging_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the PrometheusScraperLoggingConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.loggingDestination">loggingDestination</a></code> | <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList">PrometheusScraperLoggingConfigurationLoggingDestinationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference">PrometheusScraperLoggingConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.loggingDestinationInput">loggingDestinationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestination">PrometheusScraperLoggingConfigurationLoggingDestination</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.scraperComponentsInput">scraperComponentsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.scraperIdInput">scraperIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeouts">PrometheusScraperLoggingConfigurationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.scraperComponents">scraperComponents</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.scraperId">scraperId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `loggingDestination`<sup>Required</sup> <a name="loggingDestination" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.loggingDestination"></a>

```typescript
public readonly loggingDestination: PrometheusScraperLoggingConfigurationLoggingDestinationList;
```

- *Type:* <a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList">PrometheusScraperLoggingConfigurationLoggingDestinationList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.timeouts"></a>

```typescript
public readonly timeouts: PrometheusScraperLoggingConfigurationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference">PrometheusScraperLoggingConfigurationTimeoutsOutputReference</a>

---

##### `loggingDestinationInput`<sup>Optional</sup> <a name="loggingDestinationInput" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.loggingDestinationInput"></a>

```typescript
public readonly loggingDestinationInput: IResolvable | PrometheusScraperLoggingConfigurationLoggingDestination[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestination">PrometheusScraperLoggingConfigurationLoggingDestination</a>[]

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `scraperComponentsInput`<sup>Optional</sup> <a name="scraperComponentsInput" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.scraperComponentsInput"></a>

```typescript
public readonly scraperComponentsInput: string[];
```

- *Type:* string[]

---

##### `scraperIdInput`<sup>Optional</sup> <a name="scraperIdInput" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.scraperIdInput"></a>

```typescript
public readonly scraperIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | PrometheusScraperLoggingConfigurationTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeouts">PrometheusScraperLoggingConfigurationTimeouts</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `scraperComponents`<sup>Required</sup> <a name="scraperComponents" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.scraperComponents"></a>

```typescript
public readonly scraperComponents: string[];
```

- *Type:* string[]

---

##### `scraperId`<sup>Required</sup> <a name="scraperId" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.scraperId"></a>

```typescript
public readonly scraperId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PrometheusScraperLoggingConfigurationConfig <a name="PrometheusScraperLoggingConfigurationConfig" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.Initializer"></a>

```typescript
import { prometheusScraperLoggingConfiguration } from '@cdktn/provider-aws'

const prometheusScraperLoggingConfigurationConfig: prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.scraperId">scraperId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_scraper_logging_configuration#scraper_id PrometheusScraperLoggingConfiguration#scraper_id}. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.loggingDestination">loggingDestination</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestination">PrometheusScraperLoggingConfigurationLoggingDestination</a>[]</code> | logging_destination block. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.scraperComponents">scraperComponents</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_scraper_logging_configuration#scraper_components PrometheusScraperLoggingConfiguration#scraper_components}. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeouts">PrometheusScraperLoggingConfigurationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `scraperId`<sup>Required</sup> <a name="scraperId" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.scraperId"></a>

```typescript
public readonly scraperId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_scraper_logging_configuration#scraper_id PrometheusScraperLoggingConfiguration#scraper_id}.

---

##### `loggingDestination`<sup>Optional</sup> <a name="loggingDestination" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.loggingDestination"></a>

```typescript
public readonly loggingDestination: IResolvable | PrometheusScraperLoggingConfigurationLoggingDestination[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestination">PrometheusScraperLoggingConfigurationLoggingDestination</a>[]

logging_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_scraper_logging_configuration#logging_destination PrometheusScraperLoggingConfiguration#logging_destination}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_scraper_logging_configuration#region PrometheusScraperLoggingConfiguration#region}

---

##### `scraperComponents`<sup>Optional</sup> <a name="scraperComponents" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.scraperComponents"></a>

```typescript
public readonly scraperComponents: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_scraper_logging_configuration#scraper_components PrometheusScraperLoggingConfiguration#scraper_components}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: PrometheusScraperLoggingConfigurationTimeouts;
```

- *Type:* <a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeouts">PrometheusScraperLoggingConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_scraper_logging_configuration#timeouts PrometheusScraperLoggingConfiguration#timeouts}

---

### PrometheusScraperLoggingConfigurationLoggingDestination <a name="PrometheusScraperLoggingConfigurationLoggingDestination" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestination"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestination.Initializer"></a>

```typescript
import { prometheusScraperLoggingConfiguration } from '@cdktn/provider-aws'

const prometheusScraperLoggingConfigurationLoggingDestination: prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestination = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestination.property.cloudwatchLogs">cloudwatchLogs</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs">PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs</a>[]</code> | cloudwatch_logs block. |

---

##### `cloudwatchLogs`<sup>Optional</sup> <a name="cloudwatchLogs" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestination.property.cloudwatchLogs"></a>

```typescript
public readonly cloudwatchLogs: IResolvable | PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs">PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs</a>[]

cloudwatch_logs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_scraper_logging_configuration#cloudwatch_logs PrometheusScraperLoggingConfiguration#cloudwatch_logs}

---

### PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs <a name="PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs.Initializer"></a>

```typescript
import { prometheusScraperLoggingConfiguration } from '@cdktn/provider-aws'

const prometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs: prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs.property.logGroupArn">logGroupArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_scraper_logging_configuration#log_group_arn PrometheusScraperLoggingConfiguration#log_group_arn}. |

---

##### `logGroupArn`<sup>Required</sup> <a name="logGroupArn" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs.property.logGroupArn"></a>

```typescript
public readonly logGroupArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_scraper_logging_configuration#log_group_arn PrometheusScraperLoggingConfiguration#log_group_arn}.

---

### PrometheusScraperLoggingConfigurationTimeouts <a name="PrometheusScraperLoggingConfigurationTimeouts" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeouts.Initializer"></a>

```typescript
import { prometheusScraperLoggingConfiguration } from '@cdktn/provider-aws'

const prometheusScraperLoggingConfigurationTimeouts: prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeouts.property.update">update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_scraper_logging_configuration#create PrometheusScraperLoggingConfiguration#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_scraper_logging_configuration#delete PrometheusScraperLoggingConfiguration#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/prometheus_scraper_logging_configuration#update PrometheusScraperLoggingConfiguration#update}

---

## Classes <a name="Classes" id="Classes"></a>

### PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList <a name="PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.Initializer"></a>

```typescript
import { prometheusScraperLoggingConfiguration } from '@cdktn/provider-aws'

new prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.get"></a>

```typescript
public get(index: number): PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs">PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs">PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs</a>[]

---


### PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference <a name="PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.Initializer"></a>

```typescript
import { prometheusScraperLoggingConfiguration } from '@cdktn/provider-aws'

new prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.property.logGroupArnInput">logGroupArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.property.logGroupArn">logGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs">PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logGroupArnInput`<sup>Optional</sup> <a name="logGroupArnInput" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.property.logGroupArnInput"></a>

```typescript
public readonly logGroupArnInput: string;
```

- *Type:* string

---

##### `logGroupArn`<sup>Required</sup> <a name="logGroupArn" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.property.logGroupArn"></a>

```typescript
public readonly logGroupArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs">PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs</a>

---


### PrometheusScraperLoggingConfigurationLoggingDestinationList <a name="PrometheusScraperLoggingConfigurationLoggingDestinationList" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.Initializer"></a>

```typescript
import { prometheusScraperLoggingConfiguration } from '@cdktn/provider-aws'

new prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.get"></a>

```typescript
public get(index: number): PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestination">PrometheusScraperLoggingConfigurationLoggingDestination</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PrometheusScraperLoggingConfigurationLoggingDestination[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestination">PrometheusScraperLoggingConfigurationLoggingDestination</a>[]

---


### PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference <a name="PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.Initializer"></a>

```typescript
import { prometheusScraperLoggingConfiguration } from '@cdktn/provider-aws'

new prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.putCloudwatchLogs">putCloudwatchLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.resetCloudwatchLogs">resetCloudwatchLogs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudwatchLogs` <a name="putCloudwatchLogs" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.putCloudwatchLogs"></a>

```typescript
public putCloudwatchLogs(value: IResolvable | PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.putCloudwatchLogs.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs">PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs</a>[]

---

##### `resetCloudwatchLogs` <a name="resetCloudwatchLogs" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.resetCloudwatchLogs"></a>

```typescript
public resetCloudwatchLogs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.property.cloudwatchLogs">cloudwatchLogs</a></code> | <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList">PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.property.cloudwatchLogsInput">cloudwatchLogsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs">PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestination">PrometheusScraperLoggingConfigurationLoggingDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudwatchLogs`<sup>Required</sup> <a name="cloudwatchLogs" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.property.cloudwatchLogs"></a>

```typescript
public readonly cloudwatchLogs: PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList;
```

- *Type:* <a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList">PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogsList</a>

---

##### `cloudwatchLogsInput`<sup>Optional</sup> <a name="cloudwatchLogsInput" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.property.cloudwatchLogsInput"></a>

```typescript
public readonly cloudwatchLogsInput: IResolvable | PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs">PrometheusScraperLoggingConfigurationLoggingDestinationCloudwatchLogs</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestinationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PrometheusScraperLoggingConfigurationLoggingDestination;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationLoggingDestination">PrometheusScraperLoggingConfigurationLoggingDestination</a>

---


### PrometheusScraperLoggingConfigurationTimeoutsOutputReference <a name="PrometheusScraperLoggingConfigurationTimeoutsOutputReference" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.Initializer"></a>

```typescript
import { prometheusScraperLoggingConfiguration } from '@cdktn/provider-aws'

new prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeouts">PrometheusScraperLoggingConfigurationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | PrometheusScraperLoggingConfigurationTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.prometheusScraperLoggingConfiguration.PrometheusScraperLoggingConfigurationTimeouts">PrometheusScraperLoggingConfigurationTimeouts</a>

---



