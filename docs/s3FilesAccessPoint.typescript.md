# `s3FilesAccessPoint` Submodule <a name="`s3FilesAccessPoint` Submodule" id="@cdktn/provider-aws.s3FilesAccessPoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3FilesAccessPoint <a name="S3FilesAccessPoint" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/s3files_access_point aws_s3files_access_point}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.Initializer"></a>

```typescript
import { s3FilesAccessPoint } from '@cdktn/provider-aws'

new s3FilesAccessPoint.S3FilesAccessPoint(scope: Construct, id: string, config: S3FilesAccessPointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig">S3FilesAccessPointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig">S3FilesAccessPointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.putPosixUser">putPosixUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.putRootDirectory">putRootDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.resetPosixUser">resetPosixUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.resetRootDirectory">resetRootDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPosixUser` <a name="putPosixUser" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.putPosixUser"></a>

```typescript
public putPosixUser(value: IResolvable | S3FilesAccessPointPosixUser[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.putPosixUser.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUser">S3FilesAccessPointPosixUser</a>[]

---

##### `putRootDirectory` <a name="putRootDirectory" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.putRootDirectory"></a>

```typescript
public putRootDirectory(value: IResolvable | S3FilesAccessPointRootDirectory[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.putRootDirectory.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectory">S3FilesAccessPointRootDirectory</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.putTimeouts"></a>

```typescript
public putTimeouts(value: S3FilesAccessPointTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeouts">S3FilesAccessPointTimeouts</a>

---

##### `resetPosixUser` <a name="resetPosixUser" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.resetPosixUser"></a>

```typescript
public resetPosixUser(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetRootDirectory` <a name="resetRootDirectory" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.resetRootDirectory"></a>

```typescript
public resetRootDirectory(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a S3FilesAccessPoint resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.isConstruct"></a>

```typescript
import { s3FilesAccessPoint } from '@cdktn/provider-aws'

s3FilesAccessPoint.S3FilesAccessPoint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.isTerraformElement"></a>

```typescript
import { s3FilesAccessPoint } from '@cdktn/provider-aws'

s3FilesAccessPoint.S3FilesAccessPoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.isTerraformResource"></a>

```typescript
import { s3FilesAccessPoint } from '@cdktn/provider-aws'

s3FilesAccessPoint.S3FilesAccessPoint.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.generateConfigForImport"></a>

```typescript
import { s3FilesAccessPoint } from '@cdktn/provider-aws'

s3FilesAccessPoint.S3FilesAccessPoint.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a S3FilesAccessPoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the S3FilesAccessPoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing S3FilesAccessPoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/s3files_access_point#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the S3FilesAccessPoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.ownerId">ownerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.posixUser">posixUser</a></code> | <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList">S3FilesAccessPointPosixUserList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.rootDirectory">rootDirectory</a></code> | <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList">S3FilesAccessPointRootDirectoryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.tagsAll">tagsAll</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference">S3FilesAccessPointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.fileSystemIdInput">fileSystemIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.posixUserInput">posixUserInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUser">S3FilesAccessPointPosixUser</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.rootDirectoryInput">rootDirectoryInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectory">S3FilesAccessPointRootDirectory</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeouts">S3FilesAccessPointTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.fileSystemId">fileSystemId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.ownerId"></a>

```typescript
public readonly ownerId: string;
```

- *Type:* string

---

##### `posixUser`<sup>Required</sup> <a name="posixUser" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.posixUser"></a>

```typescript
public readonly posixUser: S3FilesAccessPointPosixUserList;
```

- *Type:* <a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList">S3FilesAccessPointPosixUserList</a>

---

##### `rootDirectory`<sup>Required</sup> <a name="rootDirectory" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.rootDirectory"></a>

```typescript
public readonly rootDirectory: S3FilesAccessPointRootDirectoryList;
```

- *Type:* <a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList">S3FilesAccessPointRootDirectoryList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.timeouts"></a>

```typescript
public readonly timeouts: S3FilesAccessPointTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference">S3FilesAccessPointTimeoutsOutputReference</a>

---

##### `fileSystemIdInput`<sup>Optional</sup> <a name="fileSystemIdInput" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.fileSystemIdInput"></a>

```typescript
public readonly fileSystemIdInput: string;
```

- *Type:* string

---

##### `posixUserInput`<sup>Optional</sup> <a name="posixUserInput" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.posixUserInput"></a>

```typescript
public readonly posixUserInput: IResolvable | S3FilesAccessPointPosixUser[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUser">S3FilesAccessPointPosixUser</a>[]

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `rootDirectoryInput`<sup>Optional</sup> <a name="rootDirectoryInput" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.rootDirectoryInput"></a>

```typescript
public readonly rootDirectoryInput: IResolvable | S3FilesAccessPointRootDirectory[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectory">S3FilesAccessPointRootDirectory</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | S3FilesAccessPointTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeouts">S3FilesAccessPointTimeouts</a>

---

##### `fileSystemId`<sup>Required</sup> <a name="fileSystemId" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.fileSystemId"></a>

```typescript
public readonly fileSystemId: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### S3FilesAccessPointConfig <a name="S3FilesAccessPointConfig" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig.Initializer"></a>

```typescript
import { s3FilesAccessPoint } from '@cdktn/provider-aws'

const s3FilesAccessPointConfig: s3FilesAccessPoint.S3FilesAccessPointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig.property.fileSystemId">fileSystemId</a></code> | <code>string</code> | File system ID. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig.property.posixUser">posixUser</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUser">S3FilesAccessPointPosixUser</a>[]</code> | posix_user block. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig.property.rootDirectory">rootDirectory</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectory">S3FilesAccessPointRootDirectory</a>[]</code> | root_directory block. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/s3files_access_point#tags S3FilesAccessPoint#tags}. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeouts">S3FilesAccessPointTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `fileSystemId`<sup>Required</sup> <a name="fileSystemId" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig.property.fileSystemId"></a>

```typescript
public readonly fileSystemId: string;
```

- *Type:* string

File system ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/s3files_access_point#file_system_id S3FilesAccessPoint#file_system_id}

---

##### `posixUser`<sup>Optional</sup> <a name="posixUser" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig.property.posixUser"></a>

```typescript
public readonly posixUser: IResolvable | S3FilesAccessPointPosixUser[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUser">S3FilesAccessPointPosixUser</a>[]

posix_user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/s3files_access_point#posix_user S3FilesAccessPoint#posix_user}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/s3files_access_point#region S3FilesAccessPoint#region}

---

##### `rootDirectory`<sup>Optional</sup> <a name="rootDirectory" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig.property.rootDirectory"></a>

```typescript
public readonly rootDirectory: IResolvable | S3FilesAccessPointRootDirectory[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectory">S3FilesAccessPointRootDirectory</a>[]

root_directory block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/s3files_access_point#root_directory S3FilesAccessPoint#root_directory}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/s3files_access_point#tags S3FilesAccessPoint#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointConfig.property.timeouts"></a>

```typescript
public readonly timeouts: S3FilesAccessPointTimeouts;
```

- *Type:* <a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeouts">S3FilesAccessPointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/s3files_access_point#timeouts S3FilesAccessPoint#timeouts}

---

### S3FilesAccessPointPosixUser <a name="S3FilesAccessPointPosixUser" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUser.Initializer"></a>

```typescript
import { s3FilesAccessPoint } from '@cdktn/provider-aws'

const s3FilesAccessPointPosixUser: s3FilesAccessPoint.S3FilesAccessPointPosixUser = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUser.property.gid">gid</a></code> | <code>number</code> | POSIX group ID. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUser.property.uid">uid</a></code> | <code>number</code> | POSIX user ID. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUser.property.secondaryGids">secondaryGids</a></code> | <code>number[]</code> | Secondary POSIX group IDs. |

---

##### `gid`<sup>Required</sup> <a name="gid" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUser.property.gid"></a>

```typescript
public readonly gid: number;
```

- *Type:* number

POSIX group ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/s3files_access_point#gid S3FilesAccessPoint#gid}

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUser.property.uid"></a>

```typescript
public readonly uid: number;
```

- *Type:* number

POSIX user ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/s3files_access_point#uid S3FilesAccessPoint#uid}

---

##### `secondaryGids`<sup>Optional</sup> <a name="secondaryGids" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUser.property.secondaryGids"></a>

```typescript
public readonly secondaryGids: number[];
```

- *Type:* number[]

Secondary POSIX group IDs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/s3files_access_point#secondary_gids S3FilesAccessPoint#secondary_gids}

---

### S3FilesAccessPointRootDirectory <a name="S3FilesAccessPointRootDirectory" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectory"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectory.Initializer"></a>

```typescript
import { s3FilesAccessPoint } from '@cdktn/provider-aws'

const s3FilesAccessPointRootDirectory: s3FilesAccessPoint.S3FilesAccessPointRootDirectory = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectory.property.creationPermissions">creationPermissions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissions">S3FilesAccessPointRootDirectoryCreationPermissions</a>[]</code> | creation_permissions block. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectory.property.path">path</a></code> | <code>string</code> | Root directory path. |

---

##### `creationPermissions`<sup>Optional</sup> <a name="creationPermissions" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectory.property.creationPermissions"></a>

```typescript
public readonly creationPermissions: IResolvable | S3FilesAccessPointRootDirectoryCreationPermissions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissions">S3FilesAccessPointRootDirectoryCreationPermissions</a>[]

creation_permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/s3files_access_point#creation_permissions S3FilesAccessPoint#creation_permissions}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectory.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Root directory path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/s3files_access_point#path S3FilesAccessPoint#path}

---

### S3FilesAccessPointRootDirectoryCreationPermissions <a name="S3FilesAccessPointRootDirectoryCreationPermissions" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissions.Initializer"></a>

```typescript
import { s3FilesAccessPoint } from '@cdktn/provider-aws'

const s3FilesAccessPointRootDirectoryCreationPermissions: s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissions.property.ownerGid">ownerGid</a></code> | <code>number</code> | Owner group ID. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissions.property.ownerUid">ownerUid</a></code> | <code>number</code> | Owner user ID. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissions.property.permissions">permissions</a></code> | <code>string</code> | POSIX permissions. |

---

##### `ownerGid`<sup>Required</sup> <a name="ownerGid" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissions.property.ownerGid"></a>

```typescript
public readonly ownerGid: number;
```

- *Type:* number

Owner group ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/s3files_access_point#owner_gid S3FilesAccessPoint#owner_gid}

---

##### `ownerUid`<sup>Required</sup> <a name="ownerUid" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissions.property.ownerUid"></a>

```typescript
public readonly ownerUid: number;
```

- *Type:* number

Owner user ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/s3files_access_point#owner_uid S3FilesAccessPoint#owner_uid}

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissions.property.permissions"></a>

```typescript
public readonly permissions: string;
```

- *Type:* string

POSIX permissions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/s3files_access_point#permissions S3FilesAccessPoint#permissions}

---

### S3FilesAccessPointTimeouts <a name="S3FilesAccessPointTimeouts" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeouts.Initializer"></a>

```typescript
import { s3FilesAccessPoint } from '@cdktn/provider-aws'

const s3FilesAccessPointTimeouts: s3FilesAccessPoint.S3FilesAccessPointTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/s3files_access_point#create S3FilesAccessPoint#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/resources/s3files_access_point#delete S3FilesAccessPoint#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### S3FilesAccessPointPosixUserList <a name="S3FilesAccessPointPosixUserList" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList.Initializer"></a>

```typescript
import { s3FilesAccessPoint } from '@cdktn/provider-aws'

new s3FilesAccessPoint.S3FilesAccessPointPosixUserList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList.get"></a>

```typescript
public get(index: number): S3FilesAccessPointPosixUserOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUser">S3FilesAccessPointPosixUser</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3FilesAccessPointPosixUser[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUser">S3FilesAccessPointPosixUser</a>[]

---


### S3FilesAccessPointPosixUserOutputReference <a name="S3FilesAccessPointPosixUserOutputReference" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.Initializer"></a>

```typescript
import { s3FilesAccessPoint } from '@cdktn/provider-aws'

new s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.resetSecondaryGids">resetSecondaryGids</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecondaryGids` <a name="resetSecondaryGids" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.resetSecondaryGids"></a>

```typescript
public resetSecondaryGids(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.gidInput">gidInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.secondaryGidsInput">secondaryGidsInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.uidInput">uidInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.gid">gid</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.secondaryGids">secondaryGids</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.uid">uid</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUser">S3FilesAccessPointPosixUser</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `gidInput`<sup>Optional</sup> <a name="gidInput" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.gidInput"></a>

```typescript
public readonly gidInput: number;
```

- *Type:* number

---

##### `secondaryGidsInput`<sup>Optional</sup> <a name="secondaryGidsInput" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.secondaryGidsInput"></a>

```typescript
public readonly secondaryGidsInput: number[];
```

- *Type:* number[]

---

##### `uidInput`<sup>Optional</sup> <a name="uidInput" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.uidInput"></a>

```typescript
public readonly uidInput: number;
```

- *Type:* number

---

##### `gid`<sup>Required</sup> <a name="gid" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.gid"></a>

```typescript
public readonly gid: number;
```

- *Type:* number

---

##### `secondaryGids`<sup>Required</sup> <a name="secondaryGids" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.secondaryGids"></a>

```typescript
public readonly secondaryGids: number[];
```

- *Type:* number[]

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.uid"></a>

```typescript
public readonly uid: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUserOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3FilesAccessPointPosixUser;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointPosixUser">S3FilesAccessPointPosixUser</a>

---


### S3FilesAccessPointRootDirectoryCreationPermissionsList <a name="S3FilesAccessPointRootDirectoryCreationPermissionsList" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList.Initializer"></a>

```typescript
import { s3FilesAccessPoint } from '@cdktn/provider-aws'

new s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList.get"></a>

```typescript
public get(index: number): S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissions">S3FilesAccessPointRootDirectoryCreationPermissions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3FilesAccessPointRootDirectoryCreationPermissions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissions">S3FilesAccessPointRootDirectoryCreationPermissions</a>[]

---


### S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference <a name="S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.Initializer"></a>

```typescript
import { s3FilesAccessPoint } from '@cdktn/provider-aws'

new s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.ownerGidInput">ownerGidInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.ownerUidInput">ownerUidInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.permissionsInput">permissionsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.ownerGid">ownerGid</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.ownerUid">ownerUid</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.permissions">permissions</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissions">S3FilesAccessPointRootDirectoryCreationPermissions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ownerGidInput`<sup>Optional</sup> <a name="ownerGidInput" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.ownerGidInput"></a>

```typescript
public readonly ownerGidInput: number;
```

- *Type:* number

---

##### `ownerUidInput`<sup>Optional</sup> <a name="ownerUidInput" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.ownerUidInput"></a>

```typescript
public readonly ownerUidInput: number;
```

- *Type:* number

---

##### `permissionsInput`<sup>Optional</sup> <a name="permissionsInput" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.permissionsInput"></a>

```typescript
public readonly permissionsInput: string;
```

- *Type:* string

---

##### `ownerGid`<sup>Required</sup> <a name="ownerGid" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.ownerGid"></a>

```typescript
public readonly ownerGid: number;
```

- *Type:* number

---

##### `ownerUid`<sup>Required</sup> <a name="ownerUid" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.ownerUid"></a>

```typescript
public readonly ownerUid: number;
```

- *Type:* number

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.permissions"></a>

```typescript
public readonly permissions: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3FilesAccessPointRootDirectoryCreationPermissions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissions">S3FilesAccessPointRootDirectoryCreationPermissions</a>

---


### S3FilesAccessPointRootDirectoryList <a name="S3FilesAccessPointRootDirectoryList" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList.Initializer"></a>

```typescript
import { s3FilesAccessPoint } from '@cdktn/provider-aws'

new s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList.get"></a>

```typescript
public get(index: number): S3FilesAccessPointRootDirectoryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectory">S3FilesAccessPointRootDirectory</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3FilesAccessPointRootDirectory[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectory">S3FilesAccessPointRootDirectory</a>[]

---


### S3FilesAccessPointRootDirectoryOutputReference <a name="S3FilesAccessPointRootDirectoryOutputReference" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.Initializer"></a>

```typescript
import { s3FilesAccessPoint } from '@cdktn/provider-aws'

new s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.putCreationPermissions">putCreationPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.resetCreationPermissions">resetCreationPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCreationPermissions` <a name="putCreationPermissions" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.putCreationPermissions"></a>

```typescript
public putCreationPermissions(value: IResolvable | S3FilesAccessPointRootDirectoryCreationPermissions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.putCreationPermissions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissions">S3FilesAccessPointRootDirectoryCreationPermissions</a>[]

---

##### `resetCreationPermissions` <a name="resetCreationPermissions" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.resetCreationPermissions"></a>

```typescript
public resetCreationPermissions(): void
```

##### `resetPath` <a name="resetPath" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.property.creationPermissions">creationPermissions</a></code> | <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList">S3FilesAccessPointRootDirectoryCreationPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.property.creationPermissionsInput">creationPermissionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissions">S3FilesAccessPointRootDirectoryCreationPermissions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectory">S3FilesAccessPointRootDirectory</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `creationPermissions`<sup>Required</sup> <a name="creationPermissions" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.property.creationPermissions"></a>

```typescript
public readonly creationPermissions: S3FilesAccessPointRootDirectoryCreationPermissionsList;
```

- *Type:* <a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissionsList">S3FilesAccessPointRootDirectoryCreationPermissionsList</a>

---

##### `creationPermissionsInput`<sup>Optional</sup> <a name="creationPermissionsInput" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.property.creationPermissionsInput"></a>

```typescript
public readonly creationPermissionsInput: IResolvable | S3FilesAccessPointRootDirectoryCreationPermissions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryCreationPermissions">S3FilesAccessPointRootDirectoryCreationPermissions</a>[]

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3FilesAccessPointRootDirectory;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointRootDirectory">S3FilesAccessPointRootDirectory</a>

---


### S3FilesAccessPointTimeoutsOutputReference <a name="S3FilesAccessPointTimeoutsOutputReference" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.Initializer"></a>

```typescript
import { s3FilesAccessPoint } from '@cdktn/provider-aws'

new s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeouts">S3FilesAccessPointTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3FilesAccessPointTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.s3FilesAccessPoint.S3FilesAccessPointTimeouts">S3FilesAccessPointTimeouts</a>

---



