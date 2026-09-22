# `dmsMigrationProject` Submodule <a name="`dmsMigrationProject` Submodule" id="@cdktn/provider-aws.dmsMigrationProject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DmsMigrationProject <a name="DmsMigrationProject" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project aws_dms_migration_project}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer"></a>

```typescript
import { dmsMigrationProject } from '@cdktn/provider-aws'

new dmsMigrationProject.DmsMigrationProject(scope: Construct, id: string, config: DmsMigrationProjectConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig">DmsMigrationProjectConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig">DmsMigrationProjectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.putSchemaConversionApplicationAttributes">putSchemaConversionApplicationAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.putSourceDataProviderDescriptor">putSourceDataProviderDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.putTargetDataProviderDescriptor">putTargetDataProviderDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.resetSchemaConversionApplicationAttributes">resetSchemaConversionApplicationAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.resetSourceDataProviderDescriptor">resetSourceDataProviderDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.resetTargetDataProviderDescriptor">resetTargetDataProviderDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.resetTransformationRules">resetTransformationRules</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSchemaConversionApplicationAttributes` <a name="putSchemaConversionApplicationAttributes" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.putSchemaConversionApplicationAttributes"></a>

```typescript
public putSchemaConversionApplicationAttributes(value: IResolvable | DmsMigrationProjectSchemaConversionApplicationAttributes[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.putSchemaConversionApplicationAttributes.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes">DmsMigrationProjectSchemaConversionApplicationAttributes</a>[]

---

##### `putSourceDataProviderDescriptor` <a name="putSourceDataProviderDescriptor" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.putSourceDataProviderDescriptor"></a>

```typescript
public putSourceDataProviderDescriptor(value: IResolvable | DmsMigrationProjectSourceDataProviderDescriptor[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.putSourceDataProviderDescriptor.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptor">DmsMigrationProjectSourceDataProviderDescriptor</a>[]

---

##### `putTargetDataProviderDescriptor` <a name="putTargetDataProviderDescriptor" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.putTargetDataProviderDescriptor"></a>

```typescript
public putTargetDataProviderDescriptor(value: IResolvable | DmsMigrationProjectTargetDataProviderDescriptor[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.putTargetDataProviderDescriptor.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptor">DmsMigrationProjectTargetDataProviderDescriptor</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.putTimeouts"></a>

```typescript
public putTimeouts(value: DmsMigrationProjectTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeouts">DmsMigrationProjectTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.resetName"></a>

```typescript
public resetName(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetSchemaConversionApplicationAttributes` <a name="resetSchemaConversionApplicationAttributes" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.resetSchemaConversionApplicationAttributes"></a>

```typescript
public resetSchemaConversionApplicationAttributes(): void
```

##### `resetSourceDataProviderDescriptor` <a name="resetSourceDataProviderDescriptor" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.resetSourceDataProviderDescriptor"></a>

```typescript
public resetSourceDataProviderDescriptor(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTargetDataProviderDescriptor` <a name="resetTargetDataProviderDescriptor" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.resetTargetDataProviderDescriptor"></a>

```typescript
public resetTargetDataProviderDescriptor(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTransformationRules` <a name="resetTransformationRules" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.resetTransformationRules"></a>

```typescript
public resetTransformationRules(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DmsMigrationProject resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.isConstruct"></a>

```typescript
import { dmsMigrationProject } from '@cdktn/provider-aws'

dmsMigrationProject.DmsMigrationProject.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.isTerraformElement"></a>

```typescript
import { dmsMigrationProject } from '@cdktn/provider-aws'

dmsMigrationProject.DmsMigrationProject.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.isTerraformResource"></a>

```typescript
import { dmsMigrationProject } from '@cdktn/provider-aws'

dmsMigrationProject.DmsMigrationProject.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.generateConfigForImport"></a>

```typescript
import { dmsMigrationProject } from '@cdktn/provider-aws'

dmsMigrationProject.DmsMigrationProject.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DmsMigrationProject resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DmsMigrationProject to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DmsMigrationProject that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DmsMigrationProject to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.instanceProfileName">instanceProfileName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.schemaConversionApplicationAttributes">schemaConversionApplicationAttributes</a></code> | <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList">DmsMigrationProjectSchemaConversionApplicationAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.sourceDataProviderDescriptor">sourceDataProviderDescriptor</a></code> | <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList">DmsMigrationProjectSourceDataProviderDescriptorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.tagsAll">tagsAll</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.targetDataProviderDescriptor">targetDataProviderDescriptor</a></code> | <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList">DmsMigrationProjectTargetDataProviderDescriptorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference">DmsMigrationProjectTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.instanceProfileArnInput">instanceProfileArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.schemaConversionApplicationAttributesInput">schemaConversionApplicationAttributesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes">DmsMigrationProjectSchemaConversionApplicationAttributes</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.sourceDataProviderDescriptorInput">sourceDataProviderDescriptorInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptor">DmsMigrationProjectSourceDataProviderDescriptor</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.targetDataProviderDescriptorInput">targetDataProviderDescriptorInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptor">DmsMigrationProjectTargetDataProviderDescriptor</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeouts">DmsMigrationProjectTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.transformationRulesInput">transformationRulesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.instanceProfileArn">instanceProfileArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.transformationRules">transformationRules</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `instanceProfileName`<sup>Required</sup> <a name="instanceProfileName" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.instanceProfileName"></a>

```typescript
public readonly instanceProfileName: string;
```

- *Type:* string

---

##### `schemaConversionApplicationAttributes`<sup>Required</sup> <a name="schemaConversionApplicationAttributes" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.schemaConversionApplicationAttributes"></a>

```typescript
public readonly schemaConversionApplicationAttributes: DmsMigrationProjectSchemaConversionApplicationAttributesList;
```

- *Type:* <a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList">DmsMigrationProjectSchemaConversionApplicationAttributesList</a>

---

##### `sourceDataProviderDescriptor`<sup>Required</sup> <a name="sourceDataProviderDescriptor" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.sourceDataProviderDescriptor"></a>

```typescript
public readonly sourceDataProviderDescriptor: DmsMigrationProjectSourceDataProviderDescriptorList;
```

- *Type:* <a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList">DmsMigrationProjectSourceDataProviderDescriptorList</a>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `targetDataProviderDescriptor`<sup>Required</sup> <a name="targetDataProviderDescriptor" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.targetDataProviderDescriptor"></a>

```typescript
public readonly targetDataProviderDescriptor: DmsMigrationProjectTargetDataProviderDescriptorList;
```

- *Type:* <a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList">DmsMigrationProjectTargetDataProviderDescriptorList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.timeouts"></a>

```typescript
public readonly timeouts: DmsMigrationProjectTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference">DmsMigrationProjectTimeoutsOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `instanceProfileArnInput`<sup>Optional</sup> <a name="instanceProfileArnInput" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.instanceProfileArnInput"></a>

```typescript
public readonly instanceProfileArnInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `schemaConversionApplicationAttributesInput`<sup>Optional</sup> <a name="schemaConversionApplicationAttributesInput" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.schemaConversionApplicationAttributesInput"></a>

```typescript
public readonly schemaConversionApplicationAttributesInput: IResolvable | DmsMigrationProjectSchemaConversionApplicationAttributes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes">DmsMigrationProjectSchemaConversionApplicationAttributes</a>[]

---

##### `sourceDataProviderDescriptorInput`<sup>Optional</sup> <a name="sourceDataProviderDescriptorInput" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.sourceDataProviderDescriptorInput"></a>

```typescript
public readonly sourceDataProviderDescriptorInput: IResolvable | DmsMigrationProjectSourceDataProviderDescriptor[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptor">DmsMigrationProjectSourceDataProviderDescriptor</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `targetDataProviderDescriptorInput`<sup>Optional</sup> <a name="targetDataProviderDescriptorInput" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.targetDataProviderDescriptorInput"></a>

```typescript
public readonly targetDataProviderDescriptorInput: IResolvable | DmsMigrationProjectTargetDataProviderDescriptor[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptor">DmsMigrationProjectTargetDataProviderDescriptor</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DmsMigrationProjectTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeouts">DmsMigrationProjectTimeouts</a>

---

##### `transformationRulesInput`<sup>Optional</sup> <a name="transformationRulesInput" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.transformationRulesInput"></a>

```typescript
public readonly transformationRulesInput: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `instanceProfileArn`<sup>Required</sup> <a name="instanceProfileArn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.instanceProfileArn"></a>

```typescript
public readonly instanceProfileArn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `transformationRules`<sup>Required</sup> <a name="transformationRules" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.transformationRules"></a>

```typescript
public readonly transformationRules: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProject.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DmsMigrationProjectConfig <a name="DmsMigrationProjectConfig" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.Initializer"></a>

```typescript
import { dmsMigrationProject } from '@cdktn/provider-aws'

const dmsMigrationProjectConfig: dmsMigrationProject.DmsMigrationProjectConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.instanceProfileArn">instanceProfileArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#instance_profile_arn DmsMigrationProject#instance_profile_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#description DmsMigrationProject#description}. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#name DmsMigrationProject#name}. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.schemaConversionApplicationAttributes">schemaConversionApplicationAttributes</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes">DmsMigrationProjectSchemaConversionApplicationAttributes</a>[]</code> | schema_conversion_application_attributes block. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.sourceDataProviderDescriptor">sourceDataProviderDescriptor</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptor">DmsMigrationProjectSourceDataProviderDescriptor</a>[]</code> | source_data_provider_descriptor block. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#tags DmsMigrationProject#tags}. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.targetDataProviderDescriptor">targetDataProviderDescriptor</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptor">DmsMigrationProjectTargetDataProviderDescriptor</a>[]</code> | target_data_provider_descriptor block. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeouts">DmsMigrationProjectTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.transformationRules">transformationRules</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#transformation_rules DmsMigrationProject#transformation_rules}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `instanceProfileArn`<sup>Required</sup> <a name="instanceProfileArn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.instanceProfileArn"></a>

```typescript
public readonly instanceProfileArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#instance_profile_arn DmsMigrationProject#instance_profile_arn}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#description DmsMigrationProject#description}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#name DmsMigrationProject#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#region DmsMigrationProject#region}

---

##### `schemaConversionApplicationAttributes`<sup>Optional</sup> <a name="schemaConversionApplicationAttributes" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.schemaConversionApplicationAttributes"></a>

```typescript
public readonly schemaConversionApplicationAttributes: IResolvable | DmsMigrationProjectSchemaConversionApplicationAttributes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes">DmsMigrationProjectSchemaConversionApplicationAttributes</a>[]

schema_conversion_application_attributes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#schema_conversion_application_attributes DmsMigrationProject#schema_conversion_application_attributes}

---

##### `sourceDataProviderDescriptor`<sup>Optional</sup> <a name="sourceDataProviderDescriptor" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.sourceDataProviderDescriptor"></a>

```typescript
public readonly sourceDataProviderDescriptor: IResolvable | DmsMigrationProjectSourceDataProviderDescriptor[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptor">DmsMigrationProjectSourceDataProviderDescriptor</a>[]

source_data_provider_descriptor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#source_data_provider_descriptor DmsMigrationProject#source_data_provider_descriptor}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#tags DmsMigrationProject#tags}.

---

##### `targetDataProviderDescriptor`<sup>Optional</sup> <a name="targetDataProviderDescriptor" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.targetDataProviderDescriptor"></a>

```typescript
public readonly targetDataProviderDescriptor: IResolvable | DmsMigrationProjectTargetDataProviderDescriptor[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptor">DmsMigrationProjectTargetDataProviderDescriptor</a>[]

target_data_provider_descriptor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#target_data_provider_descriptor DmsMigrationProject#target_data_provider_descriptor}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DmsMigrationProjectTimeouts;
```

- *Type:* <a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeouts">DmsMigrationProjectTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#timeouts DmsMigrationProject#timeouts}

---

##### `transformationRules`<sup>Optional</sup> <a name="transformationRules" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectConfig.property.transformationRules"></a>

```typescript
public readonly transformationRules: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#transformation_rules DmsMigrationProject#transformation_rules}.

---

### DmsMigrationProjectSchemaConversionApplicationAttributes <a name="DmsMigrationProjectSchemaConversionApplicationAttributes" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes.Initializer"></a>

```typescript
import { dmsMigrationProject } from '@cdktn/provider-aws'

const dmsMigrationProjectSchemaConversionApplicationAttributes: dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes.property.s3BucketPath">s3BucketPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#s3_bucket_path DmsMigrationProject#s3_bucket_path}. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes.property.s3BucketRoleArn">s3BucketRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#s3_bucket_role_arn DmsMigrationProject#s3_bucket_role_arn}. |

---

##### `s3BucketPath`<sup>Optional</sup> <a name="s3BucketPath" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes.property.s3BucketPath"></a>

```typescript
public readonly s3BucketPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#s3_bucket_path DmsMigrationProject#s3_bucket_path}.

---

##### `s3BucketRoleArn`<sup>Optional</sup> <a name="s3BucketRoleArn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes.property.s3BucketRoleArn"></a>

```typescript
public readonly s3BucketRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#s3_bucket_role_arn DmsMigrationProject#s3_bucket_role_arn}.

---

### DmsMigrationProjectSourceDataProviderDescriptor <a name="DmsMigrationProjectSourceDataProviderDescriptor" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptor"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptor.Initializer"></a>

```typescript
import { dmsMigrationProject } from '@cdktn/provider-aws'

const dmsMigrationProjectSourceDataProviderDescriptor: dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptor = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptor.property.dataProviderArn">dataProviderArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#data_provider_arn DmsMigrationProject#data_provider_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptor.property.secretsManagerAccessRoleArn">secretsManagerAccessRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#secrets_manager_access_role_arn DmsMigrationProject#secrets_manager_access_role_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptor.property.secretsManagerSecretId">secretsManagerSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#secrets_manager_secret_id DmsMigrationProject#secrets_manager_secret_id}. |

---

##### `dataProviderArn`<sup>Required</sup> <a name="dataProviderArn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptor.property.dataProviderArn"></a>

```typescript
public readonly dataProviderArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#data_provider_arn DmsMigrationProject#data_provider_arn}.

---

##### `secretsManagerAccessRoleArn`<sup>Optional</sup> <a name="secretsManagerAccessRoleArn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptor.property.secretsManagerAccessRoleArn"></a>

```typescript
public readonly secretsManagerAccessRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#secrets_manager_access_role_arn DmsMigrationProject#secrets_manager_access_role_arn}.

---

##### `secretsManagerSecretId`<sup>Optional</sup> <a name="secretsManagerSecretId" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptor.property.secretsManagerSecretId"></a>

```typescript
public readonly secretsManagerSecretId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#secrets_manager_secret_id DmsMigrationProject#secrets_manager_secret_id}.

---

### DmsMigrationProjectTargetDataProviderDescriptor <a name="DmsMigrationProjectTargetDataProviderDescriptor" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptor"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptor.Initializer"></a>

```typescript
import { dmsMigrationProject } from '@cdktn/provider-aws'

const dmsMigrationProjectTargetDataProviderDescriptor: dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptor = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptor.property.dataProviderArn">dataProviderArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#data_provider_arn DmsMigrationProject#data_provider_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptor.property.secretsManagerAccessRoleArn">secretsManagerAccessRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#secrets_manager_access_role_arn DmsMigrationProject#secrets_manager_access_role_arn}. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptor.property.secretsManagerSecretId">secretsManagerSecretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#secrets_manager_secret_id DmsMigrationProject#secrets_manager_secret_id}. |

---

##### `dataProviderArn`<sup>Required</sup> <a name="dataProviderArn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptor.property.dataProviderArn"></a>

```typescript
public readonly dataProviderArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#data_provider_arn DmsMigrationProject#data_provider_arn}.

---

##### `secretsManagerAccessRoleArn`<sup>Optional</sup> <a name="secretsManagerAccessRoleArn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptor.property.secretsManagerAccessRoleArn"></a>

```typescript
public readonly secretsManagerAccessRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#secrets_manager_access_role_arn DmsMigrationProject#secrets_manager_access_role_arn}.

---

##### `secretsManagerSecretId`<sup>Optional</sup> <a name="secretsManagerSecretId" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptor.property.secretsManagerSecretId"></a>

```typescript
public readonly secretsManagerSecretId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#secrets_manager_secret_id DmsMigrationProject#secrets_manager_secret_id}.

---

### DmsMigrationProjectTimeouts <a name="DmsMigrationProjectTimeouts" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeouts.Initializer"></a>

```typescript
import { dmsMigrationProject } from '@cdktn/provider-aws'

const dmsMigrationProjectTimeouts: dmsMigrationProject.DmsMigrationProjectTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.66.0/docs/resources/dms_migration_project#create DmsMigrationProject#create}

---

## Classes <a name="Classes" id="Classes"></a>

### DmsMigrationProjectSchemaConversionApplicationAttributesList <a name="DmsMigrationProjectSchemaConversionApplicationAttributesList" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.Initializer"></a>

```typescript
import { dmsMigrationProject } from '@cdktn/provider-aws'

new dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.get"></a>

```typescript
public get(index: number): DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes">DmsMigrationProjectSchemaConversionApplicationAttributes</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DmsMigrationProjectSchemaConversionApplicationAttributes[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes">DmsMigrationProjectSchemaConversionApplicationAttributes</a>[]

---


### DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference <a name="DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.Initializer"></a>

```typescript
import { dmsMigrationProject } from '@cdktn/provider-aws'

new dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.resetS3BucketPath">resetS3BucketPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.resetS3BucketRoleArn">resetS3BucketRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetS3BucketPath` <a name="resetS3BucketPath" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.resetS3BucketPath"></a>

```typescript
public resetS3BucketPath(): void
```

##### `resetS3BucketRoleArn` <a name="resetS3BucketRoleArn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.resetS3BucketRoleArn"></a>

```typescript
public resetS3BucketRoleArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.s3BucketPathInput">s3BucketPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.s3BucketRoleArnInput">s3BucketRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.s3BucketPath">s3BucketPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.s3BucketRoleArn">s3BucketRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes">DmsMigrationProjectSchemaConversionApplicationAttributes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `s3BucketPathInput`<sup>Optional</sup> <a name="s3BucketPathInput" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.s3BucketPathInput"></a>

```typescript
public readonly s3BucketPathInput: string;
```

- *Type:* string

---

##### `s3BucketRoleArnInput`<sup>Optional</sup> <a name="s3BucketRoleArnInput" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.s3BucketRoleArnInput"></a>

```typescript
public readonly s3BucketRoleArnInput: string;
```

- *Type:* string

---

##### `s3BucketPath`<sup>Required</sup> <a name="s3BucketPath" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.s3BucketPath"></a>

```typescript
public readonly s3BucketPath: string;
```

- *Type:* string

---

##### `s3BucketRoleArn`<sup>Required</sup> <a name="s3BucketRoleArn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.s3BucketRoleArn"></a>

```typescript
public readonly s3BucketRoleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DmsMigrationProjectSchemaConversionApplicationAttributes;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSchemaConversionApplicationAttributes">DmsMigrationProjectSchemaConversionApplicationAttributes</a>

---


### DmsMigrationProjectSourceDataProviderDescriptorList <a name="DmsMigrationProjectSourceDataProviderDescriptorList" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.Initializer"></a>

```typescript
import { dmsMigrationProject } from '@cdktn/provider-aws'

new dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.get"></a>

```typescript
public get(index: number): DmsMigrationProjectSourceDataProviderDescriptorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptor">DmsMigrationProjectSourceDataProviderDescriptor</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DmsMigrationProjectSourceDataProviderDescriptor[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptor">DmsMigrationProjectSourceDataProviderDescriptor</a>[]

---


### DmsMigrationProjectSourceDataProviderDescriptorOutputReference <a name="DmsMigrationProjectSourceDataProviderDescriptorOutputReference" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.Initializer"></a>

```typescript
import { dmsMigrationProject } from '@cdktn/provider-aws'

new dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.resetSecretsManagerAccessRoleArn">resetSecretsManagerAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.resetSecretsManagerSecretId">resetSecretsManagerSecretId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecretsManagerAccessRoleArn` <a name="resetSecretsManagerAccessRoleArn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.resetSecretsManagerAccessRoleArn"></a>

```typescript
public resetSecretsManagerAccessRoleArn(): void
```

##### `resetSecretsManagerSecretId` <a name="resetSecretsManagerSecretId" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.resetSecretsManagerSecretId"></a>

```typescript
public resetSecretsManagerSecretId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.property.dataProviderName">dataProviderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.property.dataProviderArnInput">dataProviderArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.property.secretsManagerAccessRoleArnInput">secretsManagerAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.property.secretsManagerSecretIdInput">secretsManagerSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.property.dataProviderArn">dataProviderArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.property.secretsManagerAccessRoleArn">secretsManagerAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.property.secretsManagerSecretId">secretsManagerSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptor">DmsMigrationProjectSourceDataProviderDescriptor</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataProviderName`<sup>Required</sup> <a name="dataProviderName" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.property.dataProviderName"></a>

```typescript
public readonly dataProviderName: string;
```

- *Type:* string

---

##### `dataProviderArnInput`<sup>Optional</sup> <a name="dataProviderArnInput" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.property.dataProviderArnInput"></a>

```typescript
public readonly dataProviderArnInput: string;
```

- *Type:* string

---

##### `secretsManagerAccessRoleArnInput`<sup>Optional</sup> <a name="secretsManagerAccessRoleArnInput" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.property.secretsManagerAccessRoleArnInput"></a>

```typescript
public readonly secretsManagerAccessRoleArnInput: string;
```

- *Type:* string

---

##### `secretsManagerSecretIdInput`<sup>Optional</sup> <a name="secretsManagerSecretIdInput" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.property.secretsManagerSecretIdInput"></a>

```typescript
public readonly secretsManagerSecretIdInput: string;
```

- *Type:* string

---

##### `dataProviderArn`<sup>Required</sup> <a name="dataProviderArn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.property.dataProviderArn"></a>

```typescript
public readonly dataProviderArn: string;
```

- *Type:* string

---

##### `secretsManagerAccessRoleArn`<sup>Required</sup> <a name="secretsManagerAccessRoleArn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.property.secretsManagerAccessRoleArn"></a>

```typescript
public readonly secretsManagerAccessRoleArn: string;
```

- *Type:* string

---

##### `secretsManagerSecretId`<sup>Required</sup> <a name="secretsManagerSecretId" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.property.secretsManagerSecretId"></a>

```typescript
public readonly secretsManagerSecretId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DmsMigrationProjectSourceDataProviderDescriptor;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectSourceDataProviderDescriptor">DmsMigrationProjectSourceDataProviderDescriptor</a>

---


### DmsMigrationProjectTargetDataProviderDescriptorList <a name="DmsMigrationProjectTargetDataProviderDescriptorList" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.Initializer"></a>

```typescript
import { dmsMigrationProject } from '@cdktn/provider-aws'

new dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.get"></a>

```typescript
public get(index: number): DmsMigrationProjectTargetDataProviderDescriptorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptor">DmsMigrationProjectTargetDataProviderDescriptor</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DmsMigrationProjectTargetDataProviderDescriptor[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptor">DmsMigrationProjectTargetDataProviderDescriptor</a>[]

---


### DmsMigrationProjectTargetDataProviderDescriptorOutputReference <a name="DmsMigrationProjectTargetDataProviderDescriptorOutputReference" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.Initializer"></a>

```typescript
import { dmsMigrationProject } from '@cdktn/provider-aws'

new dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.resetSecretsManagerAccessRoleArn">resetSecretsManagerAccessRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.resetSecretsManagerSecretId">resetSecretsManagerSecretId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecretsManagerAccessRoleArn` <a name="resetSecretsManagerAccessRoleArn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.resetSecretsManagerAccessRoleArn"></a>

```typescript
public resetSecretsManagerAccessRoleArn(): void
```

##### `resetSecretsManagerSecretId` <a name="resetSecretsManagerSecretId" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.resetSecretsManagerSecretId"></a>

```typescript
public resetSecretsManagerSecretId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.property.dataProviderName">dataProviderName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.property.dataProviderArnInput">dataProviderArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.property.secretsManagerAccessRoleArnInput">secretsManagerAccessRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.property.secretsManagerSecretIdInput">secretsManagerSecretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.property.dataProviderArn">dataProviderArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.property.secretsManagerAccessRoleArn">secretsManagerAccessRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.property.secretsManagerSecretId">secretsManagerSecretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptor">DmsMigrationProjectTargetDataProviderDescriptor</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataProviderName`<sup>Required</sup> <a name="dataProviderName" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.property.dataProviderName"></a>

```typescript
public readonly dataProviderName: string;
```

- *Type:* string

---

##### `dataProviderArnInput`<sup>Optional</sup> <a name="dataProviderArnInput" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.property.dataProviderArnInput"></a>

```typescript
public readonly dataProviderArnInput: string;
```

- *Type:* string

---

##### `secretsManagerAccessRoleArnInput`<sup>Optional</sup> <a name="secretsManagerAccessRoleArnInput" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.property.secretsManagerAccessRoleArnInput"></a>

```typescript
public readonly secretsManagerAccessRoleArnInput: string;
```

- *Type:* string

---

##### `secretsManagerSecretIdInput`<sup>Optional</sup> <a name="secretsManagerSecretIdInput" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.property.secretsManagerSecretIdInput"></a>

```typescript
public readonly secretsManagerSecretIdInput: string;
```

- *Type:* string

---

##### `dataProviderArn`<sup>Required</sup> <a name="dataProviderArn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.property.dataProviderArn"></a>

```typescript
public readonly dataProviderArn: string;
```

- *Type:* string

---

##### `secretsManagerAccessRoleArn`<sup>Required</sup> <a name="secretsManagerAccessRoleArn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.property.secretsManagerAccessRoleArn"></a>

```typescript
public readonly secretsManagerAccessRoleArn: string;
```

- *Type:* string

---

##### `secretsManagerSecretId`<sup>Required</sup> <a name="secretsManagerSecretId" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.property.secretsManagerSecretId"></a>

```typescript
public readonly secretsManagerSecretId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DmsMigrationProjectTargetDataProviderDescriptor;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTargetDataProviderDescriptor">DmsMigrationProjectTargetDataProviderDescriptor</a>

---


### DmsMigrationProjectTimeoutsOutputReference <a name="DmsMigrationProjectTimeoutsOutputReference" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.Initializer"></a>

```typescript
import { dmsMigrationProject } from '@cdktn/provider-aws'

new dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeouts">DmsMigrationProjectTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DmsMigrationProjectTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dmsMigrationProject.DmsMigrationProjectTimeouts">DmsMigrationProjectTimeouts</a>

---



