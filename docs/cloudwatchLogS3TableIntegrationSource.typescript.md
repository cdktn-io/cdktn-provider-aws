# `cloudwatchLogS3TableIntegrationSource` Submodule <a name="`cloudwatchLogS3TableIntegrationSource` Submodule" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchLogS3TableIntegrationSource <a name="CloudwatchLogS3TableIntegrationSource" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/cloudwatch_log_s3_table_integration_source aws_cloudwatch_log_s3_table_integration_source}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.Initializer"></a>

```typescript
import { cloudwatchLogS3TableIntegrationSource } from '@cdktn/provider-aws'

new cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource(scope: Construct, id: string, config: CloudwatchLogS3TableIntegrationSourceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig">CloudwatchLogS3TableIntegrationSourceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig">CloudwatchLogS3TableIntegrationSourceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.putDataSource">putDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.resetDataSource">resetDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDataSource` <a name="putDataSource" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.putDataSource"></a>

```typescript
public putDataSource(value: IResolvable | CloudwatchLogS3TableIntegrationSourceDataSource[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.putDataSource.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSource">CloudwatchLogS3TableIntegrationSourceDataSource</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.putTimeouts"></a>

```typescript
public putTimeouts(value: CloudwatchLogS3TableIntegrationSourceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeouts">CloudwatchLogS3TableIntegrationSourceTimeouts</a>

---

##### `resetDataSource` <a name="resetDataSource" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.resetDataSource"></a>

```typescript
public resetDataSource(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudwatchLogS3TableIntegrationSource resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.isConstruct"></a>

```typescript
import { cloudwatchLogS3TableIntegrationSource } from '@cdktn/provider-aws'

cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.isTerraformElement"></a>

```typescript
import { cloudwatchLogS3TableIntegrationSource } from '@cdktn/provider-aws'

cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.isTerraformResource"></a>

```typescript
import { cloudwatchLogS3TableIntegrationSource } from '@cdktn/provider-aws'

cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.generateConfigForImport"></a>

```typescript
import { cloudwatchLogS3TableIntegrationSource } from '@cdktn/provider-aws'

cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CloudwatchLogS3TableIntegrationSource resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudwatchLogS3TableIntegrationSource to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudwatchLogS3TableIntegrationSource that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/cloudwatch_log_s3_table_integration_source#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CloudwatchLogS3TableIntegrationSource to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.dataSource">dataSource</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList">CloudwatchLogS3TableIntegrationSourceDataSourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference">CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.dataSourceInput">dataSourceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSource">CloudwatchLogS3TableIntegrationSourceDataSource</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.integrationArnInput">integrationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeouts">CloudwatchLogS3TableIntegrationSourceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.integrationArn">integrationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `dataSource`<sup>Required</sup> <a name="dataSource" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.dataSource"></a>

```typescript
public readonly dataSource: CloudwatchLogS3TableIntegrationSourceDataSourceList;
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList">CloudwatchLogS3TableIntegrationSourceDataSourceList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.timeouts"></a>

```typescript
public readonly timeouts: CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference">CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference</a>

---

##### `dataSourceInput`<sup>Optional</sup> <a name="dataSourceInput" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.dataSourceInput"></a>

```typescript
public readonly dataSourceInput: IResolvable | CloudwatchLogS3TableIntegrationSourceDataSource[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSource">CloudwatchLogS3TableIntegrationSourceDataSource</a>[]

---

##### `integrationArnInput`<sup>Optional</sup> <a name="integrationArnInput" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.integrationArnInput"></a>

```typescript
public readonly integrationArnInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CloudwatchLogS3TableIntegrationSourceTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeouts">CloudwatchLogS3TableIntegrationSourceTimeouts</a>

---

##### `integrationArn`<sup>Required</sup> <a name="integrationArn" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.integrationArn"></a>

```typescript
public readonly integrationArn: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSource.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchLogS3TableIntegrationSourceConfig <a name="CloudwatchLogS3TableIntegrationSourceConfig" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.Initializer"></a>

```typescript
import { cloudwatchLogS3TableIntegrationSource } from '@cdktn/provider-aws'

const cloudwatchLogS3TableIntegrationSourceConfig: cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.integrationArn">integrationArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/cloudwatch_log_s3_table_integration_source#integration_arn CloudwatchLogS3TableIntegrationSource#integration_arn}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.dataSource">dataSource</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSource">CloudwatchLogS3TableIntegrationSourceDataSource</a>[]</code> | data_source block. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeouts">CloudwatchLogS3TableIntegrationSourceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `integrationArn`<sup>Required</sup> <a name="integrationArn" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.integrationArn"></a>

```typescript
public readonly integrationArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/cloudwatch_log_s3_table_integration_source#integration_arn CloudwatchLogS3TableIntegrationSource#integration_arn}.

---

##### `dataSource`<sup>Optional</sup> <a name="dataSource" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.dataSource"></a>

```typescript
public readonly dataSource: IResolvable | CloudwatchLogS3TableIntegrationSourceDataSource[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSource">CloudwatchLogS3TableIntegrationSourceDataSource</a>[]

data_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/cloudwatch_log_s3_table_integration_source#data_source CloudwatchLogS3TableIntegrationSource#data_source}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/cloudwatch_log_s3_table_integration_source#region CloudwatchLogS3TableIntegrationSource#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CloudwatchLogS3TableIntegrationSourceTimeouts;
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeouts">CloudwatchLogS3TableIntegrationSourceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/cloudwatch_log_s3_table_integration_source#timeouts CloudwatchLogS3TableIntegrationSource#timeouts}

---

### CloudwatchLogS3TableIntegrationSourceDataSource <a name="CloudwatchLogS3TableIntegrationSourceDataSource" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSource.Initializer"></a>

```typescript
import { cloudwatchLogS3TableIntegrationSource } from '@cdktn/provider-aws'

const cloudwatchLogS3TableIntegrationSourceDataSource: cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSource.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/cloudwatch_log_s3_table_integration_source#name CloudwatchLogS3TableIntegrationSource#name}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSource.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/cloudwatch_log_s3_table_integration_source#type CloudwatchLogS3TableIntegrationSource#type}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSource.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/cloudwatch_log_s3_table_integration_source#name CloudwatchLogS3TableIntegrationSource#name}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSource.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/cloudwatch_log_s3_table_integration_source#type CloudwatchLogS3TableIntegrationSource#type}.

---

### CloudwatchLogS3TableIntegrationSourceTimeouts <a name="CloudwatchLogS3TableIntegrationSourceTimeouts" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeouts.Initializer"></a>

```typescript
import { cloudwatchLogS3TableIntegrationSource } from '@cdktn/provider-aws'

const cloudwatchLogS3TableIntegrationSourceTimeouts: cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/cloudwatch_log_s3_table_integration_source#delete CloudwatchLogS3TableIntegrationSource#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchLogS3TableIntegrationSourceDataSourceList <a name="CloudwatchLogS3TableIntegrationSourceDataSourceList" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.Initializer"></a>

```typescript
import { cloudwatchLogS3TableIntegrationSource } from '@cdktn/provider-aws'

new cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.get"></a>

```typescript
public get(index: number): CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSource">CloudwatchLogS3TableIntegrationSourceDataSource</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchLogS3TableIntegrationSourceDataSource[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSource">CloudwatchLogS3TableIntegrationSourceDataSource</a>[]

---


### CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference <a name="CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.Initializer"></a>

```typescript
import { cloudwatchLogS3TableIntegrationSource } from '@cdktn/provider-aws'

new cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSource">CloudwatchLogS3TableIntegrationSourceDataSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchLogS3TableIntegrationSourceDataSource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceDataSource">CloudwatchLogS3TableIntegrationSourceDataSource</a>

---


### CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference <a name="CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.Initializer"></a>

```typescript
import { cloudwatchLogS3TableIntegrationSource } from '@cdktn/provider-aws'

new cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeouts">CloudwatchLogS3TableIntegrationSourceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchLogS3TableIntegrationSourceTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchLogS3TableIntegrationSource.CloudwatchLogS3TableIntegrationSourceTimeouts">CloudwatchLogS3TableIntegrationSourceTimeouts</a>

---



