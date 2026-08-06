# `workspacesPool` Submodule <a name="`workspacesPool` Submodule" id="@cdktn/provider-aws.workspacesPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkspacesPool <a name="WorkspacesPool" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool aws_workspaces_pool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.Initializer"></a>

```typescript
import { workspacesPool } from '@cdktn/provider-aws'

new workspacesPool.WorkspacesPool(scope: Construct, id: string, config: WorkspacesPoolConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolConfig">WorkspacesPoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolConfig">WorkspacesPoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.putApplicationSettings">putApplicationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.putCapacity">putCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.putTimeoutSettings">putTimeoutSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.resetApplicationSettings">resetApplicationSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.resetCapacity">resetCapacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.resetTimeoutSettings">resetTimeoutSettings</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putApplicationSettings` <a name="putApplicationSettings" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.putApplicationSettings"></a>

```typescript
public putApplicationSettings(value: IResolvable | WorkspacesPoolApplicationSettings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.putApplicationSettings.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettings">WorkspacesPoolApplicationSettings</a>[]

---

##### `putCapacity` <a name="putCapacity" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.putCapacity"></a>

```typescript
public putCapacity(value: IResolvable | WorkspacesPoolCapacity[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.putCapacity.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacity">WorkspacesPoolCapacity</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.putTimeouts"></a>

```typescript
public putTimeouts(value: WorkspacesPoolTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeouts">WorkspacesPoolTimeouts</a>

---

##### `putTimeoutSettings` <a name="putTimeoutSettings" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.putTimeoutSettings"></a>

```typescript
public putTimeoutSettings(value: IResolvable | WorkspacesPoolTimeoutSettings[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.putTimeoutSettings.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettings">WorkspacesPoolTimeoutSettings</a>[]

---

##### `resetApplicationSettings` <a name="resetApplicationSettings" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.resetApplicationSettings"></a>

```typescript
public resetApplicationSettings(): void
```

##### `resetCapacity` <a name="resetCapacity" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.resetCapacity"></a>

```typescript
public resetCapacity(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTimeoutSettings` <a name="resetTimeoutSettings" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.resetTimeoutSettings"></a>

```typescript
public resetTimeoutSettings(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a WorkspacesPool resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.isConstruct"></a>

```typescript
import { workspacesPool } from '@cdktn/provider-aws'

workspacesPool.WorkspacesPool.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.isTerraformElement"></a>

```typescript
import { workspacesPool } from '@cdktn/provider-aws'

workspacesPool.WorkspacesPool.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.isTerraformResource"></a>

```typescript
import { workspacesPool } from '@cdktn/provider-aws'

workspacesPool.WorkspacesPool.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.generateConfigForImport"></a>

```typescript
import { workspacesPool } from '@cdktn/provider-aws'

workspacesPool.WorkspacesPool.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a WorkspacesPool resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WorkspacesPool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WorkspacesPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the WorkspacesPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.applicationSettings">applicationSettings</a></code> | <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsList">WorkspacesPoolApplicationSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.capacity">capacity</a></code> | <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityList">WorkspacesPoolCapacityList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.capacityStatus">capacityStatus</a></code> | <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusList">WorkspacesPoolCapacityStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.poolArn">poolArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.poolId">poolId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.s3BucketName">s3BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.tagsAll">tagsAll</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference">WorkspacesPoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.timeoutSettings">timeoutSettings</a></code> | <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsList">WorkspacesPoolTimeoutSettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.applicationSettingsInput">applicationSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettings">WorkspacesPoolApplicationSettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.bundleIdInput">bundleIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.capacityInput">capacityInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacity">WorkspacesPoolCapacity</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.directoryIdInput">directoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.poolNameInput">poolNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.runningModeInput">runningModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.timeoutSettingsInput">timeoutSettingsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettings">WorkspacesPoolTimeoutSettings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeouts">WorkspacesPoolTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.bundleId">bundleId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.directoryId">directoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.poolName">poolName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.runningMode">runningMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `applicationSettings`<sup>Required</sup> <a name="applicationSettings" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.applicationSettings"></a>

```typescript
public readonly applicationSettings: WorkspacesPoolApplicationSettingsList;
```

- *Type:* <a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsList">WorkspacesPoolApplicationSettingsList</a>

---

##### `capacity`<sup>Required</sup> <a name="capacity" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.capacity"></a>

```typescript
public readonly capacity: WorkspacesPoolCapacityList;
```

- *Type:* <a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityList">WorkspacesPoolCapacityList</a>

---

##### `capacityStatus`<sup>Required</sup> <a name="capacityStatus" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.capacityStatus"></a>

```typescript
public readonly capacityStatus: WorkspacesPoolCapacityStatusList;
```

- *Type:* <a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusList">WorkspacesPoolCapacityStatusList</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `poolArn`<sup>Required</sup> <a name="poolArn" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.poolArn"></a>

```typescript
public readonly poolArn: string;
```

- *Type:* string

---

##### `poolId`<sup>Required</sup> <a name="poolId" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.poolId"></a>

```typescript
public readonly poolId: string;
```

- *Type:* string

---

##### `s3BucketName`<sup>Required</sup> <a name="s3BucketName" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.s3BucketName"></a>

```typescript
public readonly s3BucketName: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.timeouts"></a>

```typescript
public readonly timeouts: WorkspacesPoolTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference">WorkspacesPoolTimeoutsOutputReference</a>

---

##### `timeoutSettings`<sup>Required</sup> <a name="timeoutSettings" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.timeoutSettings"></a>

```typescript
public readonly timeoutSettings: WorkspacesPoolTimeoutSettingsList;
```

- *Type:* <a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsList">WorkspacesPoolTimeoutSettingsList</a>

---

##### `applicationSettingsInput`<sup>Optional</sup> <a name="applicationSettingsInput" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.applicationSettingsInput"></a>

```typescript
public readonly applicationSettingsInput: IResolvable | WorkspacesPoolApplicationSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettings">WorkspacesPoolApplicationSettings</a>[]

---

##### `bundleIdInput`<sup>Optional</sup> <a name="bundleIdInput" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.bundleIdInput"></a>

```typescript
public readonly bundleIdInput: string;
```

- *Type:* string

---

##### `capacityInput`<sup>Optional</sup> <a name="capacityInput" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.capacityInput"></a>

```typescript
public readonly capacityInput: IResolvable | WorkspacesPoolCapacity[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacity">WorkspacesPoolCapacity</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `directoryIdInput`<sup>Optional</sup> <a name="directoryIdInput" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.directoryIdInput"></a>

```typescript
public readonly directoryIdInput: string;
```

- *Type:* string

---

##### `poolNameInput`<sup>Optional</sup> <a name="poolNameInput" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.poolNameInput"></a>

```typescript
public readonly poolNameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `runningModeInput`<sup>Optional</sup> <a name="runningModeInput" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.runningModeInput"></a>

```typescript
public readonly runningModeInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutSettingsInput`<sup>Optional</sup> <a name="timeoutSettingsInput" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.timeoutSettingsInput"></a>

```typescript
public readonly timeoutSettingsInput: IResolvable | WorkspacesPoolTimeoutSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettings">WorkspacesPoolTimeoutSettings</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | WorkspacesPoolTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeouts">WorkspacesPoolTimeouts</a>

---

##### `bundleId`<sup>Required</sup> <a name="bundleId" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.bundleId"></a>

```typescript
public readonly bundleId: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.directoryId"></a>

```typescript
public readonly directoryId: string;
```

- *Type:* string

---

##### `poolName`<sup>Required</sup> <a name="poolName" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.poolName"></a>

```typescript
public readonly poolName: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `runningMode`<sup>Required</sup> <a name="runningMode" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.runningMode"></a>

```typescript
public readonly runningMode: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.workspacesPool.WorkspacesPool.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkspacesPoolApplicationSettings <a name="WorkspacesPoolApplicationSettings" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettings.Initializer"></a>

```typescript
import { workspacesPool } from '@cdktn/provider-aws'

const workspacesPoolApplicationSettings: workspacesPool.WorkspacesPoolApplicationSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettings.property.settingsGroup">settingsGroup</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#settings_group WorkspacesPool#settings_group}. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettings.property.status">status</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#status WorkspacesPool#status}. |

---

##### `settingsGroup`<sup>Optional</sup> <a name="settingsGroup" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettings.property.settingsGroup"></a>

```typescript
public readonly settingsGroup: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#settings_group WorkspacesPool#settings_group}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettings.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#status WorkspacesPool#status}.

---

### WorkspacesPoolCapacity <a name="WorkspacesPoolCapacity" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacity.Initializer"></a>

```typescript
import { workspacesPool } from '@cdktn/provider-aws'

const workspacesPoolCapacity: workspacesPool.WorkspacesPoolCapacity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacity.property.desiredUserSessions">desiredUserSessions</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#desired_user_sessions WorkspacesPool#desired_user_sessions}. |

---

##### `desiredUserSessions`<sup>Required</sup> <a name="desiredUserSessions" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacity.property.desiredUserSessions"></a>

```typescript
public readonly desiredUserSessions: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#desired_user_sessions WorkspacesPool#desired_user_sessions}.

---

### WorkspacesPoolCapacityStatus <a name="WorkspacesPoolCapacityStatus" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatus.Initializer"></a>

```typescript
import { workspacesPool } from '@cdktn/provider-aws'

const workspacesPoolCapacityStatus: workspacesPool.WorkspacesPoolCapacityStatus = { ... }
```


### WorkspacesPoolConfig <a name="WorkspacesPoolConfig" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolConfig.Initializer"></a>

```typescript
import { workspacesPool } from '@cdktn/provider-aws'

const workspacesPoolConfig: workspacesPool.WorkspacesPoolConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolConfig.property.bundleId">bundleId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#bundle_id WorkspacesPool#bundle_id}. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#description WorkspacesPool#description}. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolConfig.property.directoryId">directoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#directory_id WorkspacesPool#directory_id}. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolConfig.property.poolName">poolName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#pool_name WorkspacesPool#pool_name}. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolConfig.property.runningMode">runningMode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#running_mode WorkspacesPool#running_mode}. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolConfig.property.applicationSettings">applicationSettings</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettings">WorkspacesPoolApplicationSettings</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#application_settings WorkspacesPool#application_settings}. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolConfig.property.capacity">capacity</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacity">WorkspacesPoolCapacity</a>[]</code> | capacity block. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#tags WorkspacesPool#tags}. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeouts">WorkspacesPoolTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolConfig.property.timeoutSettings">timeoutSettings</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettings">WorkspacesPoolTimeoutSettings</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#timeout_settings WorkspacesPool#timeout_settings}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `bundleId`<sup>Required</sup> <a name="bundleId" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolConfig.property.bundleId"></a>

```typescript
public readonly bundleId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#bundle_id WorkspacesPool#bundle_id}.

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#description WorkspacesPool#description}.

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolConfig.property.directoryId"></a>

```typescript
public readonly directoryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#directory_id WorkspacesPool#directory_id}.

---

##### `poolName`<sup>Required</sup> <a name="poolName" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolConfig.property.poolName"></a>

```typescript
public readonly poolName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#pool_name WorkspacesPool#pool_name}.

---

##### `runningMode`<sup>Required</sup> <a name="runningMode" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolConfig.property.runningMode"></a>

```typescript
public readonly runningMode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#running_mode WorkspacesPool#running_mode}.

---

##### `applicationSettings`<sup>Optional</sup> <a name="applicationSettings" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolConfig.property.applicationSettings"></a>

```typescript
public readonly applicationSettings: IResolvable | WorkspacesPoolApplicationSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettings">WorkspacesPoolApplicationSettings</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#application_settings WorkspacesPool#application_settings}.

---

##### `capacity`<sup>Optional</sup> <a name="capacity" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolConfig.property.capacity"></a>

```typescript
public readonly capacity: IResolvable | WorkspacesPoolCapacity[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacity">WorkspacesPoolCapacity</a>[]

capacity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#capacity WorkspacesPool#capacity}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#region WorkspacesPool#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#tags WorkspacesPool#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolConfig.property.timeouts"></a>

```typescript
public readonly timeouts: WorkspacesPoolTimeouts;
```

- *Type:* <a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeouts">WorkspacesPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#timeouts WorkspacesPool#timeouts}

---

##### `timeoutSettings`<sup>Optional</sup> <a name="timeoutSettings" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolConfig.property.timeoutSettings"></a>

```typescript
public readonly timeoutSettings: IResolvable | WorkspacesPoolTimeoutSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettings">WorkspacesPoolTimeoutSettings</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#timeout_settings WorkspacesPool#timeout_settings}.

---

### WorkspacesPoolTimeouts <a name="WorkspacesPoolTimeouts" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeouts.Initializer"></a>

```typescript
import { workspacesPool } from '@cdktn/provider-aws'

const workspacesPoolTimeouts: workspacesPool.WorkspacesPoolTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeouts.property.update">update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#create WorkspacesPool#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#delete WorkspacesPool#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#update WorkspacesPool#update}

---

### WorkspacesPoolTimeoutSettings <a name="WorkspacesPoolTimeoutSettings" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettings.Initializer"></a>

```typescript
import { workspacesPool } from '@cdktn/provider-aws'

const workspacesPoolTimeoutSettings: workspacesPool.WorkspacesPoolTimeoutSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettings.property.disconnectTimeoutInSeconds">disconnectTimeoutInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#disconnect_timeout_in_seconds WorkspacesPool#disconnect_timeout_in_seconds}. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettings.property.idleDisconnectTimeoutInSeconds">idleDisconnectTimeoutInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#idle_disconnect_timeout_in_seconds WorkspacesPool#idle_disconnect_timeout_in_seconds}. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettings.property.maxUserDurationInSeconds">maxUserDurationInSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#max_user_duration_in_seconds WorkspacesPool#max_user_duration_in_seconds}. |

---

##### `disconnectTimeoutInSeconds`<sup>Optional</sup> <a name="disconnectTimeoutInSeconds" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettings.property.disconnectTimeoutInSeconds"></a>

```typescript
public readonly disconnectTimeoutInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#disconnect_timeout_in_seconds WorkspacesPool#disconnect_timeout_in_seconds}.

---

##### `idleDisconnectTimeoutInSeconds`<sup>Optional</sup> <a name="idleDisconnectTimeoutInSeconds" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettings.property.idleDisconnectTimeoutInSeconds"></a>

```typescript
public readonly idleDisconnectTimeoutInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#idle_disconnect_timeout_in_seconds WorkspacesPool#idle_disconnect_timeout_in_seconds}.

---

##### `maxUserDurationInSeconds`<sup>Optional</sup> <a name="maxUserDurationInSeconds" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettings.property.maxUserDurationInSeconds"></a>

```typescript
public readonly maxUserDurationInSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/workspaces_pool#max_user_duration_in_seconds WorkspacesPool#max_user_duration_in_seconds}.

---

## Classes <a name="Classes" id="Classes"></a>

### WorkspacesPoolApplicationSettingsList <a name="WorkspacesPoolApplicationSettingsList" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsList.Initializer"></a>

```typescript
import { workspacesPool } from '@cdktn/provider-aws'

new workspacesPool.WorkspacesPoolApplicationSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsList.get"></a>

```typescript
public get(index: number): WorkspacesPoolApplicationSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettings">WorkspacesPoolApplicationSettings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspacesPoolApplicationSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettings">WorkspacesPoolApplicationSettings</a>[]

---


### WorkspacesPoolApplicationSettingsOutputReference <a name="WorkspacesPoolApplicationSettingsOutputReference" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.Initializer"></a>

```typescript
import { workspacesPool } from '@cdktn/provider-aws'

new workspacesPool.WorkspacesPoolApplicationSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.resetSettingsGroup">resetSettingsGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSettingsGroup` <a name="resetSettingsGroup" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.resetSettingsGroup"></a>

```typescript
public resetSettingsGroup(): void
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.resetStatus"></a>

```typescript
public resetStatus(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.property.settingsGroupInput">settingsGroupInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.property.statusInput">statusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.property.settingsGroup">settingsGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettings">WorkspacesPoolApplicationSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `settingsGroupInput`<sup>Optional</sup> <a name="settingsGroupInput" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.property.settingsGroupInput"></a>

```typescript
public readonly settingsGroupInput: string;
```

- *Type:* string

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.property.statusInput"></a>

```typescript
public readonly statusInput: string;
```

- *Type:* string

---

##### `settingsGroup`<sup>Required</sup> <a name="settingsGroup" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.property.settingsGroup"></a>

```typescript
public readonly settingsGroup: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspacesPoolApplicationSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolApplicationSettings">WorkspacesPoolApplicationSettings</a>

---


### WorkspacesPoolCapacityList <a name="WorkspacesPoolCapacityList" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityList.Initializer"></a>

```typescript
import { workspacesPool } from '@cdktn/provider-aws'

new workspacesPool.WorkspacesPoolCapacityList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityList.get"></a>

```typescript
public get(index: number): WorkspacesPoolCapacityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacity">WorkspacesPoolCapacity</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspacesPoolCapacity[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacity">WorkspacesPoolCapacity</a>[]

---


### WorkspacesPoolCapacityOutputReference <a name="WorkspacesPoolCapacityOutputReference" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.Initializer"></a>

```typescript
import { workspacesPool } from '@cdktn/provider-aws'

new workspacesPool.WorkspacesPoolCapacityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.property.desiredUserSessionsInput">desiredUserSessionsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.property.desiredUserSessions">desiredUserSessions</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacity">WorkspacesPoolCapacity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `desiredUserSessionsInput`<sup>Optional</sup> <a name="desiredUserSessionsInput" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.property.desiredUserSessionsInput"></a>

```typescript
public readonly desiredUserSessionsInput: number;
```

- *Type:* number

---

##### `desiredUserSessions`<sup>Required</sup> <a name="desiredUserSessions" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.property.desiredUserSessions"></a>

```typescript
public readonly desiredUserSessions: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspacesPoolCapacity;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacity">WorkspacesPoolCapacity</a>

---


### WorkspacesPoolCapacityStatusList <a name="WorkspacesPoolCapacityStatusList" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusList.Initializer"></a>

```typescript
import { workspacesPool } from '@cdktn/provider-aws'

new workspacesPool.WorkspacesPoolCapacityStatusList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusList.get"></a>

```typescript
public get(index: number): WorkspacesPoolCapacityStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### WorkspacesPoolCapacityStatusOutputReference <a name="WorkspacesPoolCapacityStatusOutputReference" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.Initializer"></a>

```typescript
import { workspacesPool } from '@cdktn/provider-aws'

new workspacesPool.WorkspacesPoolCapacityStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.property.activeUserSessions">activeUserSessions</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.property.actualUserSessions">actualUserSessions</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.property.availableUserSessions">availableUserSessions</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.property.desiredUserSessions">desiredUserSessions</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatus">WorkspacesPoolCapacityStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `activeUserSessions`<sup>Required</sup> <a name="activeUserSessions" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.property.activeUserSessions"></a>

```typescript
public readonly activeUserSessions: number;
```

- *Type:* number

---

##### `actualUserSessions`<sup>Required</sup> <a name="actualUserSessions" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.property.actualUserSessions"></a>

```typescript
public readonly actualUserSessions: number;
```

- *Type:* number

---

##### `availableUserSessions`<sup>Required</sup> <a name="availableUserSessions" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.property.availableUserSessions"></a>

```typescript
public readonly availableUserSessions: number;
```

- *Type:* number

---

##### `desiredUserSessions`<sup>Required</sup> <a name="desiredUserSessions" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.property.desiredUserSessions"></a>

```typescript
public readonly desiredUserSessions: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: WorkspacesPoolCapacityStatus;
```

- *Type:* <a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolCapacityStatus">WorkspacesPoolCapacityStatus</a>

---


### WorkspacesPoolTimeoutSettingsList <a name="WorkspacesPoolTimeoutSettingsList" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsList.Initializer"></a>

```typescript
import { workspacesPool } from '@cdktn/provider-aws'

new workspacesPool.WorkspacesPoolTimeoutSettingsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsList.get"></a>

```typescript
public get(index: number): WorkspacesPoolTimeoutSettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettings">WorkspacesPoolTimeoutSettings</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspacesPoolTimeoutSettings[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettings">WorkspacesPoolTimeoutSettings</a>[]

---


### WorkspacesPoolTimeoutSettingsOutputReference <a name="WorkspacesPoolTimeoutSettingsOutputReference" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.Initializer"></a>

```typescript
import { workspacesPool } from '@cdktn/provider-aws'

new workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.resetDisconnectTimeoutInSeconds">resetDisconnectTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.resetIdleDisconnectTimeoutInSeconds">resetIdleDisconnectTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.resetMaxUserDurationInSeconds">resetMaxUserDurationInSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisconnectTimeoutInSeconds` <a name="resetDisconnectTimeoutInSeconds" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.resetDisconnectTimeoutInSeconds"></a>

```typescript
public resetDisconnectTimeoutInSeconds(): void
```

##### `resetIdleDisconnectTimeoutInSeconds` <a name="resetIdleDisconnectTimeoutInSeconds" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.resetIdleDisconnectTimeoutInSeconds"></a>

```typescript
public resetIdleDisconnectTimeoutInSeconds(): void
```

##### `resetMaxUserDurationInSeconds` <a name="resetMaxUserDurationInSeconds" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.resetMaxUserDurationInSeconds"></a>

```typescript
public resetMaxUserDurationInSeconds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.property.disconnectTimeoutInSecondsInput">disconnectTimeoutInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.property.idleDisconnectTimeoutInSecondsInput">idleDisconnectTimeoutInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.property.maxUserDurationInSecondsInput">maxUserDurationInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.property.disconnectTimeoutInSeconds">disconnectTimeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.property.idleDisconnectTimeoutInSeconds">idleDisconnectTimeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.property.maxUserDurationInSeconds">maxUserDurationInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettings">WorkspacesPoolTimeoutSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `disconnectTimeoutInSecondsInput`<sup>Optional</sup> <a name="disconnectTimeoutInSecondsInput" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.property.disconnectTimeoutInSecondsInput"></a>

```typescript
public readonly disconnectTimeoutInSecondsInput: number;
```

- *Type:* number

---

##### `idleDisconnectTimeoutInSecondsInput`<sup>Optional</sup> <a name="idleDisconnectTimeoutInSecondsInput" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.property.idleDisconnectTimeoutInSecondsInput"></a>

```typescript
public readonly idleDisconnectTimeoutInSecondsInput: number;
```

- *Type:* number

---

##### `maxUserDurationInSecondsInput`<sup>Optional</sup> <a name="maxUserDurationInSecondsInput" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.property.maxUserDurationInSecondsInput"></a>

```typescript
public readonly maxUserDurationInSecondsInput: number;
```

- *Type:* number

---

##### `disconnectTimeoutInSeconds`<sup>Required</sup> <a name="disconnectTimeoutInSeconds" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.property.disconnectTimeoutInSeconds"></a>

```typescript
public readonly disconnectTimeoutInSeconds: number;
```

- *Type:* number

---

##### `idleDisconnectTimeoutInSeconds`<sup>Required</sup> <a name="idleDisconnectTimeoutInSeconds" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.property.idleDisconnectTimeoutInSeconds"></a>

```typescript
public readonly idleDisconnectTimeoutInSeconds: number;
```

- *Type:* number

---

##### `maxUserDurationInSeconds`<sup>Required</sup> <a name="maxUserDurationInSeconds" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.property.maxUserDurationInSeconds"></a>

```typescript
public readonly maxUserDurationInSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspacesPoolTimeoutSettings;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutSettings">WorkspacesPoolTimeoutSettings</a>

---


### WorkspacesPoolTimeoutsOutputReference <a name="WorkspacesPoolTimeoutsOutputReference" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.Initializer"></a>

```typescript
import { workspacesPool } from '@cdktn/provider-aws'

new workspacesPool.WorkspacesPoolTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeouts">WorkspacesPoolTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | WorkspacesPoolTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.workspacesPool.WorkspacesPoolTimeouts">WorkspacesPoolTimeouts</a>

---



