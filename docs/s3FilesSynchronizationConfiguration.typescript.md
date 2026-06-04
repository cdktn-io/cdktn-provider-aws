# `s3FilesSynchronizationConfiguration` Submodule <a name="`s3FilesSynchronizationConfiguration` Submodule" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3FilesSynchronizationConfiguration <a name="S3FilesSynchronizationConfiguration" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/s3files_synchronization_configuration aws_s3files_synchronization_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.Initializer"></a>

```typescript
import { s3FilesSynchronizationConfiguration } from '@cdktn/provider-aws'

new s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration(scope: Construct, id: string, config: S3FilesSynchronizationConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig">S3FilesSynchronizationConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig">S3FilesSynchronizationConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.putExpirationDataRule">putExpirationDataRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.putImportDataRule">putImportDataRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.resetExpirationDataRule">resetExpirationDataRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.resetImportDataRule">resetImportDataRule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.resetLatestVersionNumber">resetLatestVersionNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putExpirationDataRule` <a name="putExpirationDataRule" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.putExpirationDataRule"></a>

```typescript
public putExpirationDataRule(value: IResolvable | S3FilesSynchronizationConfigurationExpirationDataRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.putExpirationDataRule.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRule">S3FilesSynchronizationConfigurationExpirationDataRule</a>[]

---

##### `putImportDataRule` <a name="putImportDataRule" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.putImportDataRule"></a>

```typescript
public putImportDataRule(value: IResolvable | S3FilesSynchronizationConfigurationImportDataRule[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.putImportDataRule.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRule">S3FilesSynchronizationConfigurationImportDataRule</a>[]

---

##### `resetExpirationDataRule` <a name="resetExpirationDataRule" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.resetExpirationDataRule"></a>

```typescript
public resetExpirationDataRule(): void
```

##### `resetImportDataRule` <a name="resetImportDataRule" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.resetImportDataRule"></a>

```typescript
public resetImportDataRule(): void
```

##### `resetLatestVersionNumber` <a name="resetLatestVersionNumber" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.resetLatestVersionNumber"></a>

```typescript
public resetLatestVersionNumber(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a S3FilesSynchronizationConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.isConstruct"></a>

```typescript
import { s3FilesSynchronizationConfiguration } from '@cdktn/provider-aws'

s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.isTerraformElement"></a>

```typescript
import { s3FilesSynchronizationConfiguration } from '@cdktn/provider-aws'

s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.isTerraformResource"></a>

```typescript
import { s3FilesSynchronizationConfiguration } from '@cdktn/provider-aws'

s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.generateConfigForImport"></a>

```typescript
import { s3FilesSynchronizationConfiguration } from '@cdktn/provider-aws'

s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a S3FilesSynchronizationConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the S3FilesSynchronizationConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing S3FilesSynchronizationConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/s3files_synchronization_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the S3FilesSynchronizationConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.expirationDataRule">expirationDataRule</a></code> | <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList">S3FilesSynchronizationConfigurationExpirationDataRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.importDataRule">importDataRule</a></code> | <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList">S3FilesSynchronizationConfigurationImportDataRuleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.expirationDataRuleInput">expirationDataRuleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRule">S3FilesSynchronizationConfigurationExpirationDataRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.fileSystemIdInput">fileSystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.importDataRuleInput">importDataRuleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRule">S3FilesSynchronizationConfigurationImportDataRule</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.latestVersionNumberInput">latestVersionNumberInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.fileSystemId">fileSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.latestVersionNumber">latestVersionNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `expirationDataRule`<sup>Required</sup> <a name="expirationDataRule" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.expirationDataRule"></a>

```typescript
public readonly expirationDataRule: S3FilesSynchronizationConfigurationExpirationDataRuleList;
```

- *Type:* <a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList">S3FilesSynchronizationConfigurationExpirationDataRuleList</a>

---

##### `importDataRule`<sup>Required</sup> <a name="importDataRule" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.importDataRule"></a>

```typescript
public readonly importDataRule: S3FilesSynchronizationConfigurationImportDataRuleList;
```

- *Type:* <a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList">S3FilesSynchronizationConfigurationImportDataRuleList</a>

---

##### `expirationDataRuleInput`<sup>Optional</sup> <a name="expirationDataRuleInput" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.expirationDataRuleInput"></a>

```typescript
public readonly expirationDataRuleInput: IResolvable | S3FilesSynchronizationConfigurationExpirationDataRule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRule">S3FilesSynchronizationConfigurationExpirationDataRule</a>[]

---

##### `fileSystemIdInput`<sup>Optional</sup> <a name="fileSystemIdInput" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.fileSystemIdInput"></a>

```typescript
public readonly fileSystemIdInput: string;
```

- *Type:* string

---

##### `importDataRuleInput`<sup>Optional</sup> <a name="importDataRuleInput" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.importDataRuleInput"></a>

```typescript
public readonly importDataRuleInput: IResolvable | S3FilesSynchronizationConfigurationImportDataRule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRule">S3FilesSynchronizationConfigurationImportDataRule</a>[]

---

##### `latestVersionNumberInput`<sup>Optional</sup> <a name="latestVersionNumberInput" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.latestVersionNumberInput"></a>

```typescript
public readonly latestVersionNumberInput: number;
```

- *Type:* number

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `fileSystemId`<sup>Required</sup> <a name="fileSystemId" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.fileSystemId"></a>

```typescript
public readonly fileSystemId: string;
```

- *Type:* string

---

##### `latestVersionNumber`<sup>Required</sup> <a name="latestVersionNumber" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.latestVersionNumber"></a>

```typescript
public readonly latestVersionNumber: number;
```

- *Type:* number

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### S3FilesSynchronizationConfigurationConfig <a name="S3FilesSynchronizationConfigurationConfig" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.Initializer"></a>

```typescript
import { s3FilesSynchronizationConfiguration } from '@cdktn/provider-aws'

const s3FilesSynchronizationConfigurationConfig: s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.fileSystemId">fileSystemId</a></code> | <code>string</code> | File system ID. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.expirationDataRule">expirationDataRule</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRule">S3FilesSynchronizationConfigurationExpirationDataRule</a>[]</code> | expiration_data_rule block. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.importDataRule">importDataRule</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRule">S3FilesSynchronizationConfigurationImportDataRule</a>[]</code> | import_data_rule block. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.latestVersionNumber">latestVersionNumber</a></code> | <code>number</code> | Latest version number for optimistic locking. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `fileSystemId`<sup>Required</sup> <a name="fileSystemId" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.fileSystemId"></a>

```typescript
public readonly fileSystemId: string;
```

- *Type:* string

File system ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/s3files_synchronization_configuration#file_system_id S3FilesSynchronizationConfiguration#file_system_id}

---

##### `expirationDataRule`<sup>Optional</sup> <a name="expirationDataRule" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.expirationDataRule"></a>

```typescript
public readonly expirationDataRule: IResolvable | S3FilesSynchronizationConfigurationExpirationDataRule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRule">S3FilesSynchronizationConfigurationExpirationDataRule</a>[]

expiration_data_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/s3files_synchronization_configuration#expiration_data_rule S3FilesSynchronizationConfiguration#expiration_data_rule}

---

##### `importDataRule`<sup>Optional</sup> <a name="importDataRule" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.importDataRule"></a>

```typescript
public readonly importDataRule: IResolvable | S3FilesSynchronizationConfigurationImportDataRule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRule">S3FilesSynchronizationConfigurationImportDataRule</a>[]

import_data_rule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/s3files_synchronization_configuration#import_data_rule S3FilesSynchronizationConfiguration#import_data_rule}

---

##### `latestVersionNumber`<sup>Optional</sup> <a name="latestVersionNumber" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.latestVersionNumber"></a>

```typescript
public readonly latestVersionNumber: number;
```

- *Type:* number

Latest version number for optimistic locking.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/s3files_synchronization_configuration#latest_version_number S3FilesSynchronizationConfiguration#latest_version_number}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/s3files_synchronization_configuration#region S3FilesSynchronizationConfiguration#region}

---

### S3FilesSynchronizationConfigurationExpirationDataRule <a name="S3FilesSynchronizationConfigurationExpirationDataRule" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRule.Initializer"></a>

```typescript
import { s3FilesSynchronizationConfiguration } from '@cdktn/provider-aws'

const s3FilesSynchronizationConfigurationExpirationDataRule: s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRule.property.daysAfterLastAccess">daysAfterLastAccess</a></code> | <code>number</code> | Days after last access before data expires. |

---

##### `daysAfterLastAccess`<sup>Required</sup> <a name="daysAfterLastAccess" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRule.property.daysAfterLastAccess"></a>

```typescript
public readonly daysAfterLastAccess: number;
```

- *Type:* number

Days after last access before data expires.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/s3files_synchronization_configuration#days_after_last_access S3FilesSynchronizationConfiguration#days_after_last_access}

---

### S3FilesSynchronizationConfigurationImportDataRule <a name="S3FilesSynchronizationConfigurationImportDataRule" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRule.Initializer"></a>

```typescript
import { s3FilesSynchronizationConfiguration } from '@cdktn/provider-aws'

const s3FilesSynchronizationConfigurationImportDataRule: s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRule = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRule.property.prefix">prefix</a></code> | <code>string</code> | S3 prefix for import. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRule.property.sizeLessThan">sizeLessThan</a></code> | <code>number</code> | Maximum file size to import. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRule.property.trigger">trigger</a></code> | <code>string</code> | Import trigger type. |

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRule.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

S3 prefix for import.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/s3files_synchronization_configuration#prefix S3FilesSynchronizationConfiguration#prefix}

---

##### `sizeLessThan`<sup>Required</sup> <a name="sizeLessThan" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRule.property.sizeLessThan"></a>

```typescript
public readonly sizeLessThan: number;
```

- *Type:* number

Maximum file size to import.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/s3files_synchronization_configuration#size_less_than S3FilesSynchronizationConfiguration#size_less_than}

---

##### `trigger`<sup>Required</sup> <a name="trigger" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRule.property.trigger"></a>

```typescript
public readonly trigger: string;
```

- *Type:* string

Import trigger type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.48.0/docs/resources/s3files_synchronization_configuration#trigger S3FilesSynchronizationConfiguration#trigger}

---

## Classes <a name="Classes" id="Classes"></a>

### S3FilesSynchronizationConfigurationExpirationDataRuleList <a name="S3FilesSynchronizationConfigurationExpirationDataRuleList" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.Initializer"></a>

```typescript
import { s3FilesSynchronizationConfiguration } from '@cdktn/provider-aws'

new s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.get"></a>

```typescript
public get(index: number): S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRule">S3FilesSynchronizationConfigurationExpirationDataRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3FilesSynchronizationConfigurationExpirationDataRule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRule">S3FilesSynchronizationConfigurationExpirationDataRule</a>[]

---


### S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference <a name="S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.Initializer"></a>

```typescript
import { s3FilesSynchronizationConfiguration } from '@cdktn/provider-aws'

new s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.property.daysAfterLastAccessInput">daysAfterLastAccessInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.property.daysAfterLastAccess">daysAfterLastAccess</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRule">S3FilesSynchronizationConfigurationExpirationDataRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `daysAfterLastAccessInput`<sup>Optional</sup> <a name="daysAfterLastAccessInput" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.property.daysAfterLastAccessInput"></a>

```typescript
public readonly daysAfterLastAccessInput: number;
```

- *Type:* number

---

##### `daysAfterLastAccess`<sup>Required</sup> <a name="daysAfterLastAccess" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.property.daysAfterLastAccess"></a>

```typescript
public readonly daysAfterLastAccess: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3FilesSynchronizationConfigurationExpirationDataRule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationExpirationDataRule">S3FilesSynchronizationConfigurationExpirationDataRule</a>

---


### S3FilesSynchronizationConfigurationImportDataRuleList <a name="S3FilesSynchronizationConfigurationImportDataRuleList" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.Initializer"></a>

```typescript
import { s3FilesSynchronizationConfiguration } from '@cdktn/provider-aws'

new s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.get"></a>

```typescript
public get(index: number): S3FilesSynchronizationConfigurationImportDataRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRule">S3FilesSynchronizationConfigurationImportDataRule</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3FilesSynchronizationConfigurationImportDataRule[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRule">S3FilesSynchronizationConfigurationImportDataRule</a>[]

---


### S3FilesSynchronizationConfigurationImportDataRuleOutputReference <a name="S3FilesSynchronizationConfigurationImportDataRuleOutputReference" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.Initializer"></a>

```typescript
import { s3FilesSynchronizationConfiguration } from '@cdktn/provider-aws'

new s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.sizeLessThanInput">sizeLessThanInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.triggerInput">triggerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.sizeLessThan">sizeLessThan</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.trigger">trigger</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRule">S3FilesSynchronizationConfigurationImportDataRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `sizeLessThanInput`<sup>Optional</sup> <a name="sizeLessThanInput" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.sizeLessThanInput"></a>

```typescript
public readonly sizeLessThanInput: number;
```

- *Type:* number

---

##### `triggerInput`<sup>Optional</sup> <a name="triggerInput" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.triggerInput"></a>

```typescript
public readonly triggerInput: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `sizeLessThan`<sup>Required</sup> <a name="sizeLessThan" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.sizeLessThan"></a>

```typescript
public readonly sizeLessThan: number;
```

- *Type:* number

---

##### `trigger`<sup>Required</sup> <a name="trigger" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.trigger"></a>

```typescript
public readonly trigger: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3FilesSynchronizationConfigurationImportDataRule;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.s3FilesSynchronizationConfiguration.S3FilesSynchronizationConfigurationImportDataRule">S3FilesSynchronizationConfigurationImportDataRule</a>

---



