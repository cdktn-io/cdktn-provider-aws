# `glueConnection` Submodule <a name="`glueConnection` Submodule" id="@cdktn/provider-aws.glueConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueConnection <a name="GlueConnection" id="@cdktn/provider-aws.glueConnection.GlueConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/glue_connection aws_glue_connection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueConnection.GlueConnection.Initializer"></a>

```typescript
import { glueConnection } from '@cdktn/provider-aws'

new glueConnection.GlueConnection(scope: Construct, id: string, config: GlueConnectionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionConfig">GlueConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.glueConnection.GlueConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionConfig">GlueConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.putAuthenticationConfiguration">putAuthenticationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.putPhysicalConnectionRequirements">putPhysicalConnectionRequirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.resetAthenaProperties">resetAthenaProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.resetAuthenticationConfiguration">resetAuthenticationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.resetCatalogId">resetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.resetConnectionProperties">resetConnectionProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.resetConnectionType">resetConnectionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.resetMatchCriteria">resetMatchCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.resetPhysicalConnectionRequirements">resetPhysicalConnectionRequirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.glueConnection.GlueConnection.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.glueConnection.GlueConnection.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.glueConnection.GlueConnection.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.glueConnection.GlueConnection.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.glueConnection.GlueConnection.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.glueConnection.GlueConnection.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.glueConnection.GlueConnection.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.glueConnection.GlueConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.glueConnection.GlueConnection.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.glueConnection.GlueConnection.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.glueConnection.GlueConnection.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.glueConnection.GlueConnection.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.glueConnection.GlueConnection.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.glueConnection.GlueConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnection.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnection.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnection.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnection.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnection.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnection.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnection.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnection.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnection.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.glueConnection.GlueConnection.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.glueConnection.GlueConnection.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.glueConnection.GlueConnection.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.glueConnection.GlueConnection.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnection.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.glueConnection.GlueConnection.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.glueConnection.GlueConnection.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.glueConnection.GlueConnection.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.glueConnection.GlueConnection.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.glueConnection.GlueConnection.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.glueConnection.GlueConnection.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.glueConnection.GlueConnection.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAuthenticationConfiguration` <a name="putAuthenticationConfiguration" id="@cdktn/provider-aws.glueConnection.GlueConnection.putAuthenticationConfiguration"></a>

```typescript
public putAuthenticationConfiguration(value: GlueConnectionAuthenticationConfiguration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.glueConnection.GlueConnection.putAuthenticationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration">GlueConnectionAuthenticationConfiguration</a>

---

##### `putPhysicalConnectionRequirements` <a name="putPhysicalConnectionRequirements" id="@cdktn/provider-aws.glueConnection.GlueConnection.putPhysicalConnectionRequirements"></a>

```typescript
public putPhysicalConnectionRequirements(value: GlueConnectionPhysicalConnectionRequirements): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.glueConnection.GlueConnection.putPhysicalConnectionRequirements.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirements">GlueConnectionPhysicalConnectionRequirements</a>

---

##### `resetAthenaProperties` <a name="resetAthenaProperties" id="@cdktn/provider-aws.glueConnection.GlueConnection.resetAthenaProperties"></a>

```typescript
public resetAthenaProperties(): void
```

##### `resetAuthenticationConfiguration` <a name="resetAuthenticationConfiguration" id="@cdktn/provider-aws.glueConnection.GlueConnection.resetAuthenticationConfiguration"></a>

```typescript
public resetAuthenticationConfiguration(): void
```

##### `resetCatalogId` <a name="resetCatalogId" id="@cdktn/provider-aws.glueConnection.GlueConnection.resetCatalogId"></a>

```typescript
public resetCatalogId(): void
```

##### `resetConnectionProperties` <a name="resetConnectionProperties" id="@cdktn/provider-aws.glueConnection.GlueConnection.resetConnectionProperties"></a>

```typescript
public resetConnectionProperties(): void
```

##### `resetConnectionType` <a name="resetConnectionType" id="@cdktn/provider-aws.glueConnection.GlueConnection.resetConnectionType"></a>

```typescript
public resetConnectionType(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-aws.glueConnection.GlueConnection.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.glueConnection.GlueConnection.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMatchCriteria` <a name="resetMatchCriteria" id="@cdktn/provider-aws.glueConnection.GlueConnection.resetMatchCriteria"></a>

```typescript
public resetMatchCriteria(): void
```

##### `resetPhysicalConnectionRequirements` <a name="resetPhysicalConnectionRequirements" id="@cdktn/provider-aws.glueConnection.GlueConnection.resetPhysicalConnectionRequirements"></a>

```typescript
public resetPhysicalConnectionRequirements(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.glueConnection.GlueConnection.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.glueConnection.GlueConnection.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktn/provider-aws.glueConnection.GlueConnection.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GlueConnection resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.glueConnection.GlueConnection.isConstruct"></a>

```typescript
import { glueConnection } from '@cdktn/provider-aws'

glueConnection.GlueConnection.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.glueConnection.GlueConnection.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.glueConnection.GlueConnection.isTerraformElement"></a>

```typescript
import { glueConnection } from '@cdktn/provider-aws'

glueConnection.GlueConnection.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.glueConnection.GlueConnection.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.glueConnection.GlueConnection.isTerraformResource"></a>

```typescript
import { glueConnection } from '@cdktn/provider-aws'

glueConnection.GlueConnection.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.glueConnection.GlueConnection.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.glueConnection.GlueConnection.generateConfigForImport"></a>

```typescript
import { glueConnection } from '@cdktn/provider-aws'

glueConnection.GlueConnection.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GlueConnection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.glueConnection.GlueConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.glueConnection.GlueConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GlueConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.glueConnection.GlueConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GlueConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/glue_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.glueConnection.GlueConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GlueConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.authenticationConfiguration">authenticationConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference">GlueConnectionAuthenticationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.physicalConnectionRequirements">physicalConnectionRequirements</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference">GlueConnectionPhysicalConnectionRequirementsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.athenaPropertiesInput">athenaPropertiesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.authenticationConfigurationInput">authenticationConfigurationInput</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration">GlueConnectionAuthenticationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.catalogIdInput">catalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.connectionPropertiesInput">connectionPropertiesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.connectionTypeInput">connectionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.matchCriteriaInput">matchCriteriaInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.physicalConnectionRequirementsInput">physicalConnectionRequirementsInput</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirements">GlueConnectionPhysicalConnectionRequirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.athenaProperties">athenaProperties</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.catalogId">catalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.connectionProperties">connectionProperties</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.connectionType">connectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.matchCriteria">matchCriteria</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `authenticationConfiguration`<sup>Required</sup> <a name="authenticationConfiguration" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.authenticationConfiguration"></a>

```typescript
public readonly authenticationConfiguration: GlueConnectionAuthenticationConfigurationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference">GlueConnectionAuthenticationConfigurationOutputReference</a>

---

##### `physicalConnectionRequirements`<sup>Required</sup> <a name="physicalConnectionRequirements" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.physicalConnectionRequirements"></a>

```typescript
public readonly physicalConnectionRequirements: GlueConnectionPhysicalConnectionRequirementsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference">GlueConnectionPhysicalConnectionRequirementsOutputReference</a>

---

##### `athenaPropertiesInput`<sup>Optional</sup> <a name="athenaPropertiesInput" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.athenaPropertiesInput"></a>

```typescript
public readonly athenaPropertiesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `authenticationConfigurationInput`<sup>Optional</sup> <a name="authenticationConfigurationInput" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.authenticationConfigurationInput"></a>

```typescript
public readonly authenticationConfigurationInput: GlueConnectionAuthenticationConfiguration;
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration">GlueConnectionAuthenticationConfiguration</a>

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.catalogIdInput"></a>

```typescript
public readonly catalogIdInput: string;
```

- *Type:* string

---

##### `connectionPropertiesInput`<sup>Optional</sup> <a name="connectionPropertiesInput" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.connectionPropertiesInput"></a>

```typescript
public readonly connectionPropertiesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `connectionTypeInput`<sup>Optional</sup> <a name="connectionTypeInput" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.connectionTypeInput"></a>

```typescript
public readonly connectionTypeInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `matchCriteriaInput`<sup>Optional</sup> <a name="matchCriteriaInput" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.matchCriteriaInput"></a>

```typescript
public readonly matchCriteriaInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `physicalConnectionRequirementsInput`<sup>Optional</sup> <a name="physicalConnectionRequirementsInput" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.physicalConnectionRequirementsInput"></a>

```typescript
public readonly physicalConnectionRequirementsInput: GlueConnectionPhysicalConnectionRequirements;
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirements">GlueConnectionPhysicalConnectionRequirements</a>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `athenaProperties`<sup>Required</sup> <a name="athenaProperties" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.athenaProperties"></a>

```typescript
public readonly athenaProperties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

---

##### `connectionProperties`<sup>Required</sup> <a name="connectionProperties" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.connectionProperties"></a>

```typescript
public readonly connectionProperties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `connectionType`<sup>Required</sup> <a name="connectionType" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.connectionType"></a>

```typescript
public readonly connectionType: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `matchCriteria`<sup>Required</sup> <a name="matchCriteria" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.matchCriteria"></a>

```typescript
public readonly matchCriteria: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnection.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.glueConnection.GlueConnection.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GlueConnectionAuthenticationConfiguration <a name="GlueConnectionAuthenticationConfiguration" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration.Initializer"></a>

```typescript
import { glueConnection } from '@cdktn/provider-aws'

const glueConnectionAuthenticationConfiguration: glueConnection.GlueConnectionAuthenticationConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration.property.authenticationType">authenticationType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/glue_connection#authentication_type GlueConnection#authentication_type}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration.property.basicAuthenticationCredentials">basicAuthenticationCredentials</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials">GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials</a></code> | basic_authentication_credentials block. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration.property.customAuthenticationCredentials">customAuthenticationCredentials</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/glue_connection#custom_authentication_credentials GlueConnection#custom_authentication_credentials}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/glue_connection#kms_key_arn GlueConnection#kms_key_arn}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration.property.oauth2Properties">oauth2Properties</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2Properties">GlueConnectionAuthenticationConfigurationOauth2Properties</a></code> | oauth2_properties block. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration.property.secretArn">secretArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/glue_connection#secret_arn GlueConnection#secret_arn}. |

---

##### `authenticationType`<sup>Required</sup> <a name="authenticationType" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration.property.authenticationType"></a>

```typescript
public readonly authenticationType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/glue_connection#authentication_type GlueConnection#authentication_type}.

---

##### `basicAuthenticationCredentials`<sup>Optional</sup> <a name="basicAuthenticationCredentials" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration.property.basicAuthenticationCredentials"></a>

```typescript
public readonly basicAuthenticationCredentials: GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials;
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials">GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials</a>

basic_authentication_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/glue_connection#basic_authentication_credentials GlueConnection#basic_authentication_credentials}

---

##### `customAuthenticationCredentials`<sup>Optional</sup> <a name="customAuthenticationCredentials" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration.property.customAuthenticationCredentials"></a>

```typescript
public readonly customAuthenticationCredentials: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/glue_connection#custom_authentication_credentials GlueConnection#custom_authentication_credentials}.

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/glue_connection#kms_key_arn GlueConnection#kms_key_arn}.

---

##### `oauth2Properties`<sup>Optional</sup> <a name="oauth2Properties" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration.property.oauth2Properties"></a>

```typescript
public readonly oauth2Properties: GlueConnectionAuthenticationConfigurationOauth2Properties;
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2Properties">GlueConnectionAuthenticationConfigurationOauth2Properties</a>

oauth2_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/glue_connection#oauth2_properties GlueConnection#oauth2_properties}

---

##### `secretArn`<sup>Optional</sup> <a name="secretArn" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/glue_connection#secret_arn GlueConnection#secret_arn}.

---

### GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials <a name="GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials.Initializer"></a>

```typescript
import { glueConnection } from '@cdktn/provider-aws'

const glueConnectionAuthenticationConfigurationBasicAuthenticationCredentials: glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/glue_connection#password GlueConnection#password}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials.property.username">username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/glue_connection#username GlueConnection#username}. |

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/glue_connection#password GlueConnection#password}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/glue_connection#username GlueConnection#username}.

---

### GlueConnectionAuthenticationConfigurationOauth2Properties <a name="GlueConnectionAuthenticationConfigurationOauth2Properties" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2Properties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2Properties.Initializer"></a>

```typescript
import { glueConnection } from '@cdktn/provider-aws'

const glueConnectionAuthenticationConfigurationOauth2Properties: glueConnection.GlueConnectionAuthenticationConfigurationOauth2Properties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2Properties.property.authorizationCodeProperties">authorizationCodeProperties</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties">GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties</a></code> | authorization_code_properties block. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2Properties.property.oauth2ClientApplication">oauth2ClientApplication</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication">GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication</a></code> | oauth2_client_application block. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2Properties.property.oauth2Credentials">oauth2Credentials</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials">GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials</a></code> | oauth2_credentials block. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2Properties.property.oauth2GrantType">oauth2GrantType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/glue_connection#oauth2_grant_type GlueConnection#oauth2_grant_type}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2Properties.property.tokenUrl">tokenUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/glue_connection#token_url GlueConnection#token_url}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2Properties.property.tokenUrlParametersMap">tokenUrlParametersMap</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/glue_connection#token_url_parameters_map GlueConnection#token_url_parameters_map}. |

---

##### `authorizationCodeProperties`<sup>Optional</sup> <a name="authorizationCodeProperties" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2Properties.property.authorizationCodeProperties"></a>

```typescript
public readonly authorizationCodeProperties: GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties;
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties">GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties</a>

authorization_code_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/glue_connection#authorization_code_properties GlueConnection#authorization_code_properties}

---

##### `oauth2ClientApplication`<sup>Optional</sup> <a name="oauth2ClientApplication" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2Properties.property.oauth2ClientApplication"></a>

```typescript
public readonly oauth2ClientApplication: GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication;
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication">GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication</a>

oauth2_client_application block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/glue_connection#oauth2_client_application GlueConnection#oauth2_client_application}

---

##### `oauth2Credentials`<sup>Optional</sup> <a name="oauth2Credentials" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2Properties.property.oauth2Credentials"></a>

```typescript
public readonly oauth2Credentials: GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials;
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials">GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials</a>

oauth2_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/glue_connection#oauth2_credentials GlueConnection#oauth2_credentials}

---

##### `oauth2GrantType`<sup>Optional</sup> <a name="oauth2GrantType" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2Properties.property.oauth2GrantType"></a>

```typescript
public readonly oauth2GrantType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/glue_connection#oauth2_grant_type GlueConnection#oauth2_grant_type}.

---

##### `tokenUrl`<sup>Optional</sup> <a name="tokenUrl" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2Properties.property.tokenUrl"></a>

```typescript
public readonly tokenUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/glue_connection#token_url GlueConnection#token_url}.

---

##### `tokenUrlParametersMap`<sup>Optional</sup> <a name="tokenUrlParametersMap" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2Properties.property.tokenUrlParametersMap"></a>

```typescript
public readonly tokenUrlParametersMap: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/glue_connection#token_url_parameters_map GlueConnection#token_url_parameters_map}.

---

### GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties <a name="GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties.Initializer"></a>

```typescript
import { glueConnection } from '@cdktn/provider-aws'

const glueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties: glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties.property.authorizationCode">authorizationCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/glue_connection#authorization_code GlueConnection#authorization_code}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties.property.redirectUri">redirectUri</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/glue_connection#redirect_uri GlueConnection#redirect_uri}. |

---

##### `authorizationCode`<sup>Required</sup> <a name="authorizationCode" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties.property.authorizationCode"></a>

```typescript
public readonly authorizationCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/glue_connection#authorization_code GlueConnection#authorization_code}.

---

##### `redirectUri`<sup>Required</sup> <a name="redirectUri" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties.property.redirectUri"></a>

```typescript
public readonly redirectUri: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/glue_connection#redirect_uri GlueConnection#redirect_uri}.

---

### GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication <a name="GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication.Initializer"></a>

```typescript
import { glueConnection } from '@cdktn/provider-aws'

const glueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication: glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication.property.awsManagedClientApplicationReference">awsManagedClientApplicationReference</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/glue_connection#aws_managed_client_application_reference GlueConnection#aws_managed_client_application_reference}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication.property.userManagedClientApplicationClientId">userManagedClientApplicationClientId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/glue_connection#user_managed_client_application_client_id GlueConnection#user_managed_client_application_client_id}. |

---

##### `awsManagedClientApplicationReference`<sup>Optional</sup> <a name="awsManagedClientApplicationReference" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication.property.awsManagedClientApplicationReference"></a>

```typescript
public readonly awsManagedClientApplicationReference: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/glue_connection#aws_managed_client_application_reference GlueConnection#aws_managed_client_application_reference}.

---

##### `userManagedClientApplicationClientId`<sup>Optional</sup> <a name="userManagedClientApplicationClientId" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication.property.userManagedClientApplicationClientId"></a>

```typescript
public readonly userManagedClientApplicationClientId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/glue_connection#user_managed_client_application_client_id GlueConnection#user_managed_client_application_client_id}.

---

### GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials <a name="GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials.Initializer"></a>

```typescript
import { glueConnection } from '@cdktn/provider-aws'

const glueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials: glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials.property.accessToken">accessToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/glue_connection#access_token GlueConnection#access_token}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials.property.jwtToken">jwtToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/glue_connection#jwt_token GlueConnection#jwt_token}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials.property.refreshToken">refreshToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/glue_connection#refresh_token GlueConnection#refresh_token}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials.property.userManagedClientApplicationClientSecret">userManagedClientApplicationClientSecret</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/glue_connection#user_managed_client_application_client_secret GlueConnection#user_managed_client_application_client_secret}. |

---

##### `accessToken`<sup>Optional</sup> <a name="accessToken" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials.property.accessToken"></a>

```typescript
public readonly accessToken: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/glue_connection#access_token GlueConnection#access_token}.

---

##### `jwtToken`<sup>Optional</sup> <a name="jwtToken" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials.property.jwtToken"></a>

```typescript
public readonly jwtToken: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/glue_connection#jwt_token GlueConnection#jwt_token}.

---

##### `refreshToken`<sup>Optional</sup> <a name="refreshToken" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials.property.refreshToken"></a>

```typescript
public readonly refreshToken: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/glue_connection#refresh_token GlueConnection#refresh_token}.

---

##### `userManagedClientApplicationClientSecret`<sup>Optional</sup> <a name="userManagedClientApplicationClientSecret" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials.property.userManagedClientApplicationClientSecret"></a>

```typescript
public readonly userManagedClientApplicationClientSecret: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/glue_connection#user_managed_client_application_client_secret GlueConnection#user_managed_client_application_client_secret}.

---

### GlueConnectionConfig <a name="GlueConnectionConfig" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig.Initializer"></a>

```typescript
import { glueConnection } from '@cdktn/provider-aws'

const glueConnectionConfig: glueConnection.GlueConnectionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/glue_connection#name GlueConnection#name}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.athenaProperties">athenaProperties</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/glue_connection#athena_properties GlueConnection#athena_properties}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.authenticationConfiguration">authenticationConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration">GlueConnectionAuthenticationConfiguration</a></code> | authentication_configuration block. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.catalogId">catalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/glue_connection#catalog_id GlueConnection#catalog_id}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.connectionProperties">connectionProperties</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/glue_connection#connection_properties GlueConnection#connection_properties}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.connectionType">connectionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/glue_connection#connection_type GlueConnection#connection_type}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/glue_connection#description GlueConnection#description}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/glue_connection#id GlueConnection#id}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.matchCriteria">matchCriteria</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/glue_connection#match_criteria GlueConnection#match_criteria}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.physicalConnectionRequirements">physicalConnectionRequirements</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirements">GlueConnectionPhysicalConnectionRequirements</a></code> | physical_connection_requirements block. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/glue_connection#tags GlueConnection#tags}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/glue_connection#tags_all GlueConnection#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/glue_connection#name GlueConnection#name}.

---

##### `athenaProperties`<sup>Optional</sup> <a name="athenaProperties" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.athenaProperties"></a>

```typescript
public readonly athenaProperties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/glue_connection#athena_properties GlueConnection#athena_properties}.

---

##### `authenticationConfiguration`<sup>Optional</sup> <a name="authenticationConfiguration" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.authenticationConfiguration"></a>

```typescript
public readonly authenticationConfiguration: GlueConnectionAuthenticationConfiguration;
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration">GlueConnectionAuthenticationConfiguration</a>

authentication_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/glue_connection#authentication_configuration GlueConnection#authentication_configuration}

---

##### `catalogId`<sup>Optional</sup> <a name="catalogId" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/glue_connection#catalog_id GlueConnection#catalog_id}.

---

##### `connectionProperties`<sup>Optional</sup> <a name="connectionProperties" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.connectionProperties"></a>

```typescript
public readonly connectionProperties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/glue_connection#connection_properties GlueConnection#connection_properties}.

---

##### `connectionType`<sup>Optional</sup> <a name="connectionType" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.connectionType"></a>

```typescript
public readonly connectionType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/glue_connection#connection_type GlueConnection#connection_type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/glue_connection#description GlueConnection#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/glue_connection#id GlueConnection#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `matchCriteria`<sup>Optional</sup> <a name="matchCriteria" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.matchCriteria"></a>

```typescript
public readonly matchCriteria: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/glue_connection#match_criteria GlueConnection#match_criteria}.

---

##### `physicalConnectionRequirements`<sup>Optional</sup> <a name="physicalConnectionRequirements" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.physicalConnectionRequirements"></a>

```typescript
public readonly physicalConnectionRequirements: GlueConnectionPhysicalConnectionRequirements;
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirements">GlueConnectionPhysicalConnectionRequirements</a>

physical_connection_requirements block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/glue_connection#physical_connection_requirements GlueConnection#physical_connection_requirements}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/glue_connection#region GlueConnection#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/glue_connection#tags GlueConnection#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktn/provider-aws.glueConnection.GlueConnectionConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/glue_connection#tags_all GlueConnection#tags_all}.

---

### GlueConnectionPhysicalConnectionRequirements <a name="GlueConnectionPhysicalConnectionRequirements" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirements.Initializer"></a>

```typescript
import { glueConnection } from '@cdktn/provider-aws'

const glueConnectionPhysicalConnectionRequirements: glueConnection.GlueConnectionPhysicalConnectionRequirements = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirements.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/glue_connection#availability_zone GlueConnection#availability_zone}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirements.property.securityGroupIdList">securityGroupIdList</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/glue_connection#security_group_id_list GlueConnection#security_group_id_list}. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirements.property.subnetId">subnetId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/glue_connection#subnet_id GlueConnection#subnet_id}. |

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirements.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/glue_connection#availability_zone GlueConnection#availability_zone}.

---

##### `securityGroupIdList`<sup>Optional</sup> <a name="securityGroupIdList" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirements.property.securityGroupIdList"></a>

```typescript
public readonly securityGroupIdList: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/glue_connection#security_group_id_list GlueConnection#security_group_id_list}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirements.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.56.0/docs/resources/glue_connection#subnet_id GlueConnection#subnet_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference <a name="GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.Initializer"></a>

```typescript
import { glueConnection } from '@cdktn/provider-aws'

new glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials">GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials;
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials">GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials</a>

---


### GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference <a name="GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.Initializer"></a>

```typescript
import { glueConnection } from '@cdktn/provider-aws'

new glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.property.authorizationCodeInput">authorizationCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.property.redirectUriInput">redirectUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.property.authorizationCode">authorizationCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.property.redirectUri">redirectUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties">GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorizationCodeInput`<sup>Optional</sup> <a name="authorizationCodeInput" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.property.authorizationCodeInput"></a>

```typescript
public readonly authorizationCodeInput: string;
```

- *Type:* string

---

##### `redirectUriInput`<sup>Optional</sup> <a name="redirectUriInput" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.property.redirectUriInput"></a>

```typescript
public readonly redirectUriInput: string;
```

- *Type:* string

---

##### `authorizationCode`<sup>Required</sup> <a name="authorizationCode" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.property.authorizationCode"></a>

```typescript
public readonly authorizationCode: string;
```

- *Type:* string

---

##### `redirectUri`<sup>Required</sup> <a name="redirectUri" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.property.redirectUri"></a>

```typescript
public readonly redirectUri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties;
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties">GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties</a>

---


### GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference <a name="GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.Initializer"></a>

```typescript
import { glueConnection } from '@cdktn/provider-aws'

new glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.resetAwsManagedClientApplicationReference">resetAwsManagedClientApplicationReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.resetUserManagedClientApplicationClientId">resetUserManagedClientApplicationClientId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsManagedClientApplicationReference` <a name="resetAwsManagedClientApplicationReference" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.resetAwsManagedClientApplicationReference"></a>

```typescript
public resetAwsManagedClientApplicationReference(): void
```

##### `resetUserManagedClientApplicationClientId` <a name="resetUserManagedClientApplicationClientId" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.resetUserManagedClientApplicationClientId"></a>

```typescript
public resetUserManagedClientApplicationClientId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.property.awsManagedClientApplicationReferenceInput">awsManagedClientApplicationReferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.property.userManagedClientApplicationClientIdInput">userManagedClientApplicationClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.property.awsManagedClientApplicationReference">awsManagedClientApplicationReference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.property.userManagedClientApplicationClientId">userManagedClientApplicationClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication">GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `awsManagedClientApplicationReferenceInput`<sup>Optional</sup> <a name="awsManagedClientApplicationReferenceInput" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.property.awsManagedClientApplicationReferenceInput"></a>

```typescript
public readonly awsManagedClientApplicationReferenceInput: string;
```

- *Type:* string

---

##### `userManagedClientApplicationClientIdInput`<sup>Optional</sup> <a name="userManagedClientApplicationClientIdInput" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.property.userManagedClientApplicationClientIdInput"></a>

```typescript
public readonly userManagedClientApplicationClientIdInput: string;
```

- *Type:* string

---

##### `awsManagedClientApplicationReference`<sup>Required</sup> <a name="awsManagedClientApplicationReference" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.property.awsManagedClientApplicationReference"></a>

```typescript
public readonly awsManagedClientApplicationReference: string;
```

- *Type:* string

---

##### `userManagedClientApplicationClientId`<sup>Required</sup> <a name="userManagedClientApplicationClientId" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.property.userManagedClientApplicationClientId"></a>

```typescript
public readonly userManagedClientApplicationClientId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication;
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication">GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication</a>

---


### GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference <a name="GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.Initializer"></a>

```typescript
import { glueConnection } from '@cdktn/provider-aws'

new glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.resetAccessToken">resetAccessToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.resetJwtToken">resetJwtToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.resetRefreshToken">resetRefreshToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.resetUserManagedClientApplicationClientSecret">resetUserManagedClientApplicationClientSecret</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessToken` <a name="resetAccessToken" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.resetAccessToken"></a>

```typescript
public resetAccessToken(): void
```

##### `resetJwtToken` <a name="resetJwtToken" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.resetJwtToken"></a>

```typescript
public resetJwtToken(): void
```

##### `resetRefreshToken` <a name="resetRefreshToken" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.resetRefreshToken"></a>

```typescript
public resetRefreshToken(): void
```

##### `resetUserManagedClientApplicationClientSecret` <a name="resetUserManagedClientApplicationClientSecret" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.resetUserManagedClientApplicationClientSecret"></a>

```typescript
public resetUserManagedClientApplicationClientSecret(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.accessTokenInput">accessTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.jwtTokenInput">jwtTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.refreshTokenInput">refreshTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.userManagedClientApplicationClientSecretInput">userManagedClientApplicationClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.accessToken">accessToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.jwtToken">jwtToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.refreshToken">refreshToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.userManagedClientApplicationClientSecret">userManagedClientApplicationClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials">GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessTokenInput`<sup>Optional</sup> <a name="accessTokenInput" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.accessTokenInput"></a>

```typescript
public readonly accessTokenInput: string;
```

- *Type:* string

---

##### `jwtTokenInput`<sup>Optional</sup> <a name="jwtTokenInput" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.jwtTokenInput"></a>

```typescript
public readonly jwtTokenInput: string;
```

- *Type:* string

---

##### `refreshTokenInput`<sup>Optional</sup> <a name="refreshTokenInput" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.refreshTokenInput"></a>

```typescript
public readonly refreshTokenInput: string;
```

- *Type:* string

---

##### `userManagedClientApplicationClientSecretInput`<sup>Optional</sup> <a name="userManagedClientApplicationClientSecretInput" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.userManagedClientApplicationClientSecretInput"></a>

```typescript
public readonly userManagedClientApplicationClientSecretInput: string;
```

- *Type:* string

---

##### `accessToken`<sup>Required</sup> <a name="accessToken" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.accessToken"></a>

```typescript
public readonly accessToken: string;
```

- *Type:* string

---

##### `jwtToken`<sup>Required</sup> <a name="jwtToken" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.jwtToken"></a>

```typescript
public readonly jwtToken: string;
```

- *Type:* string

---

##### `refreshToken`<sup>Required</sup> <a name="refreshToken" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.refreshToken"></a>

```typescript
public readonly refreshToken: string;
```

- *Type:* string

---

##### `userManagedClientApplicationClientSecret`<sup>Required</sup> <a name="userManagedClientApplicationClientSecret" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.userManagedClientApplicationClientSecret"></a>

```typescript
public readonly userManagedClientApplicationClientSecret: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials;
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials">GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials</a>

---


### GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference <a name="GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.Initializer"></a>

```typescript
import { glueConnection } from '@cdktn/provider-aws'

new glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.putAuthorizationCodeProperties">putAuthorizationCodeProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.putOauth2ClientApplication">putOauth2ClientApplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.putOauth2Credentials">putOauth2Credentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.resetAuthorizationCodeProperties">resetAuthorizationCodeProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.resetOauth2ClientApplication">resetOauth2ClientApplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.resetOauth2Credentials">resetOauth2Credentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.resetOauth2GrantType">resetOauth2GrantType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.resetTokenUrl">resetTokenUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.resetTokenUrlParametersMap">resetTokenUrlParametersMap</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthorizationCodeProperties` <a name="putAuthorizationCodeProperties" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.putAuthorizationCodeProperties"></a>

```typescript
public putAuthorizationCodeProperties(value: GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.putAuthorizationCodeProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties">GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties</a>

---

##### `putOauth2ClientApplication` <a name="putOauth2ClientApplication" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.putOauth2ClientApplication"></a>

```typescript
public putOauth2ClientApplication(value: GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.putOauth2ClientApplication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication">GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication</a>

---

##### `putOauth2Credentials` <a name="putOauth2Credentials" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.putOauth2Credentials"></a>

```typescript
public putOauth2Credentials(value: GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.putOauth2Credentials.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials">GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials</a>

---

##### `resetAuthorizationCodeProperties` <a name="resetAuthorizationCodeProperties" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.resetAuthorizationCodeProperties"></a>

```typescript
public resetAuthorizationCodeProperties(): void
```

##### `resetOauth2ClientApplication` <a name="resetOauth2ClientApplication" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.resetOauth2ClientApplication"></a>

```typescript
public resetOauth2ClientApplication(): void
```

##### `resetOauth2Credentials` <a name="resetOauth2Credentials" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.resetOauth2Credentials"></a>

```typescript
public resetOauth2Credentials(): void
```

##### `resetOauth2GrantType` <a name="resetOauth2GrantType" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.resetOauth2GrantType"></a>

```typescript
public resetOauth2GrantType(): void
```

##### `resetTokenUrl` <a name="resetTokenUrl" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.resetTokenUrl"></a>

```typescript
public resetTokenUrl(): void
```

##### `resetTokenUrlParametersMap` <a name="resetTokenUrlParametersMap" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.resetTokenUrlParametersMap"></a>

```typescript
public resetTokenUrlParametersMap(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.authorizationCodeProperties">authorizationCodeProperties</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference">GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.oauth2ClientApplication">oauth2ClientApplication</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference">GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.oauth2Credentials">oauth2Credentials</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference">GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.authorizationCodePropertiesInput">authorizationCodePropertiesInput</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties">GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.oauth2ClientApplicationInput">oauth2ClientApplicationInput</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication">GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.oauth2CredentialsInput">oauth2CredentialsInput</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials">GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.oauth2GrantTypeInput">oauth2GrantTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.tokenUrlInput">tokenUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.tokenUrlParametersMapInput">tokenUrlParametersMapInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.oauth2GrantType">oauth2GrantType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.tokenUrl">tokenUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.tokenUrlParametersMap">tokenUrlParametersMap</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2Properties">GlueConnectionAuthenticationConfigurationOauth2Properties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authorizationCodeProperties`<sup>Required</sup> <a name="authorizationCodeProperties" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.authorizationCodeProperties"></a>

```typescript
public readonly authorizationCodeProperties: GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference">GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodePropertiesOutputReference</a>

---

##### `oauth2ClientApplication`<sup>Required</sup> <a name="oauth2ClientApplication" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.oauth2ClientApplication"></a>

```typescript
public readonly oauth2ClientApplication: GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference">GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplicationOutputReference</a>

---

##### `oauth2Credentials`<sup>Required</sup> <a name="oauth2Credentials" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.oauth2Credentials"></a>

```typescript
public readonly oauth2Credentials: GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference">GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2CredentialsOutputReference</a>

---

##### `authorizationCodePropertiesInput`<sup>Optional</sup> <a name="authorizationCodePropertiesInput" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.authorizationCodePropertiesInput"></a>

```typescript
public readonly authorizationCodePropertiesInput: GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties;
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties">GlueConnectionAuthenticationConfigurationOauth2PropertiesAuthorizationCodeProperties</a>

---

##### `oauth2ClientApplicationInput`<sup>Optional</sup> <a name="oauth2ClientApplicationInput" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.oauth2ClientApplicationInput"></a>

```typescript
public readonly oauth2ClientApplicationInput: GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication;
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication">GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2ClientApplication</a>

---

##### `oauth2CredentialsInput`<sup>Optional</sup> <a name="oauth2CredentialsInput" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.oauth2CredentialsInput"></a>

```typescript
public readonly oauth2CredentialsInput: GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials;
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials">GlueConnectionAuthenticationConfigurationOauth2PropertiesOauth2Credentials</a>

---

##### `oauth2GrantTypeInput`<sup>Optional</sup> <a name="oauth2GrantTypeInput" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.oauth2GrantTypeInput"></a>

```typescript
public readonly oauth2GrantTypeInput: string;
```

- *Type:* string

---

##### `tokenUrlInput`<sup>Optional</sup> <a name="tokenUrlInput" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.tokenUrlInput"></a>

```typescript
public readonly tokenUrlInput: string;
```

- *Type:* string

---

##### `tokenUrlParametersMapInput`<sup>Optional</sup> <a name="tokenUrlParametersMapInput" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.tokenUrlParametersMapInput"></a>

```typescript
public readonly tokenUrlParametersMapInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `oauth2GrantType`<sup>Required</sup> <a name="oauth2GrantType" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.oauth2GrantType"></a>

```typescript
public readonly oauth2GrantType: string;
```

- *Type:* string

---

##### `tokenUrl`<sup>Required</sup> <a name="tokenUrl" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.tokenUrl"></a>

```typescript
public readonly tokenUrl: string;
```

- *Type:* string

---

##### `tokenUrlParametersMap`<sup>Required</sup> <a name="tokenUrlParametersMap" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.tokenUrlParametersMap"></a>

```typescript
public readonly tokenUrlParametersMap: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GlueConnectionAuthenticationConfigurationOauth2Properties;
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2Properties">GlueConnectionAuthenticationConfigurationOauth2Properties</a>

---


### GlueConnectionAuthenticationConfigurationOutputReference <a name="GlueConnectionAuthenticationConfigurationOutputReference" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.Initializer"></a>

```typescript
import { glueConnection } from '@cdktn/provider-aws'

new glueConnection.GlueConnectionAuthenticationConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.putBasicAuthenticationCredentials">putBasicAuthenticationCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.putOauth2Properties">putOauth2Properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.resetBasicAuthenticationCredentials">resetBasicAuthenticationCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.resetCustomAuthenticationCredentials">resetCustomAuthenticationCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.resetOauth2Properties">resetOauth2Properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.resetSecretArn">resetSecretArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBasicAuthenticationCredentials` <a name="putBasicAuthenticationCredentials" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.putBasicAuthenticationCredentials"></a>

```typescript
public putBasicAuthenticationCredentials(value: GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.putBasicAuthenticationCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials">GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials</a>

---

##### `putOauth2Properties` <a name="putOauth2Properties" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.putOauth2Properties"></a>

```typescript
public putOauth2Properties(value: GlueConnectionAuthenticationConfigurationOauth2Properties): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.putOauth2Properties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2Properties">GlueConnectionAuthenticationConfigurationOauth2Properties</a>

---

##### `resetBasicAuthenticationCredentials` <a name="resetBasicAuthenticationCredentials" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.resetBasicAuthenticationCredentials"></a>

```typescript
public resetBasicAuthenticationCredentials(): void
```

##### `resetCustomAuthenticationCredentials` <a name="resetCustomAuthenticationCredentials" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.resetCustomAuthenticationCredentials"></a>

```typescript
public resetCustomAuthenticationCredentials(): void
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.resetKmsKeyArn"></a>

```typescript
public resetKmsKeyArn(): void
```

##### `resetOauth2Properties` <a name="resetOauth2Properties" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.resetOauth2Properties"></a>

```typescript
public resetOauth2Properties(): void
```

##### `resetSecretArn` <a name="resetSecretArn" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.resetSecretArn"></a>

```typescript
public resetSecretArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.basicAuthenticationCredentials">basicAuthenticationCredentials</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference">GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.oauth2Properties">oauth2Properties</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference">GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.authenticationTypeInput">authenticationTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.basicAuthenticationCredentialsInput">basicAuthenticationCredentialsInput</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials">GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.customAuthenticationCredentialsInput">customAuthenticationCredentialsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.oauth2PropertiesInput">oauth2PropertiesInput</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2Properties">GlueConnectionAuthenticationConfigurationOauth2Properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.secretArnInput">secretArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.authenticationType">authenticationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.customAuthenticationCredentials">customAuthenticationCredentials</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.secretArn">secretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration">GlueConnectionAuthenticationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `basicAuthenticationCredentials`<sup>Required</sup> <a name="basicAuthenticationCredentials" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.basicAuthenticationCredentials"></a>

```typescript
public readonly basicAuthenticationCredentials: GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference">GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference</a>

---

##### `oauth2Properties`<sup>Required</sup> <a name="oauth2Properties" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.oauth2Properties"></a>

```typescript
public readonly oauth2Properties: GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference">GlueConnectionAuthenticationConfigurationOauth2PropertiesOutputReference</a>

---

##### `authenticationTypeInput`<sup>Optional</sup> <a name="authenticationTypeInput" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.authenticationTypeInput"></a>

```typescript
public readonly authenticationTypeInput: string;
```

- *Type:* string

---

##### `basicAuthenticationCredentialsInput`<sup>Optional</sup> <a name="basicAuthenticationCredentialsInput" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.basicAuthenticationCredentialsInput"></a>

```typescript
public readonly basicAuthenticationCredentialsInput: GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials;
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials">GlueConnectionAuthenticationConfigurationBasicAuthenticationCredentials</a>

---

##### `customAuthenticationCredentialsInput`<sup>Optional</sup> <a name="customAuthenticationCredentialsInput" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.customAuthenticationCredentialsInput"></a>

```typescript
public readonly customAuthenticationCredentialsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.kmsKeyArnInput"></a>

```typescript
public readonly kmsKeyArnInput: string;
```

- *Type:* string

---

##### `oauth2PropertiesInput`<sup>Optional</sup> <a name="oauth2PropertiesInput" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.oauth2PropertiesInput"></a>

```typescript
public readonly oauth2PropertiesInput: GlueConnectionAuthenticationConfigurationOauth2Properties;
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOauth2Properties">GlueConnectionAuthenticationConfigurationOauth2Properties</a>

---

##### `secretArnInput`<sup>Optional</sup> <a name="secretArnInput" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.secretArnInput"></a>

```typescript
public readonly secretArnInput: string;
```

- *Type:* string

---

##### `authenticationType`<sup>Required</sup> <a name="authenticationType" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.authenticationType"></a>

```typescript
public readonly authenticationType: string;
```

- *Type:* string

---

##### `customAuthenticationCredentials`<sup>Required</sup> <a name="customAuthenticationCredentials" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.customAuthenticationCredentials"></a>

```typescript
public readonly customAuthenticationCredentials: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GlueConnectionAuthenticationConfiguration;
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionAuthenticationConfiguration">GlueConnectionAuthenticationConfiguration</a>

---


### GlueConnectionPhysicalConnectionRequirementsOutputReference <a name="GlueConnectionPhysicalConnectionRequirementsOutputReference" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.Initializer"></a>

```typescript
import { glueConnection } from '@cdktn/provider-aws'

new glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.resetAvailabilityZone">resetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.resetSecurityGroupIdList">resetSecurityGroupIdList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.resetSubnetId">resetSubnetId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAvailabilityZone` <a name="resetAvailabilityZone" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.resetAvailabilityZone"></a>

```typescript
public resetAvailabilityZone(): void
```

##### `resetSecurityGroupIdList` <a name="resetSecurityGroupIdList" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.resetSecurityGroupIdList"></a>

```typescript
public resetSecurityGroupIdList(): void
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.resetSubnetId"></a>

```typescript
public resetSubnetId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.property.securityGroupIdListInput">securityGroupIdListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.property.securityGroupIdList">securityGroupIdList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.property.subnetId">subnetId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirements">GlueConnectionPhysicalConnectionRequirements</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.property.availabilityZoneInput"></a>

```typescript
public readonly availabilityZoneInput: string;
```

- *Type:* string

---

##### `securityGroupIdListInput`<sup>Optional</sup> <a name="securityGroupIdListInput" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.property.securityGroupIdListInput"></a>

```typescript
public readonly securityGroupIdListInput: string[];
```

- *Type:* string[]

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.property.subnetIdInput"></a>

```typescript
public readonly subnetIdInput: string;
```

- *Type:* string

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `securityGroupIdList`<sup>Required</sup> <a name="securityGroupIdList" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.property.securityGroupIdList"></a>

```typescript
public readonly securityGroupIdList: string[];
```

- *Type:* string[]

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.property.subnetId"></a>

```typescript
public readonly subnetId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirementsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GlueConnectionPhysicalConnectionRequirements;
```

- *Type:* <a href="#@cdktn/provider-aws.glueConnection.GlueConnectionPhysicalConnectionRequirements">GlueConnectionPhysicalConnectionRequirements</a>

---



