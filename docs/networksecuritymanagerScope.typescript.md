# `networksecuritymanagerScope` Submodule <a name="`networksecuritymanagerScope` Submodule" id="@cdktn/provider-aws.networksecuritymanagerScope"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworksecuritymanagerScope <a name="NetworksecuritymanagerScope" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope aws_networksecuritymanager_scope}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.Initializer"></a>

```typescript
import { networksecuritymanagerScope } from '@cdktn/provider-aws'

new networksecuritymanagerScope.NetworksecuritymanagerScope(scope: Construct, id: string, config: NetworksecuritymanagerScopeConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig">NetworksecuritymanagerScopeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig">NetworksecuritymanagerScopeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.putScopeConfiguration">putScopeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.resetIsPublished">resetIsPublished</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.resetScopeConfiguration">resetScopeConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putScopeConfiguration` <a name="putScopeConfiguration" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.putScopeConfiguration"></a>

```typescript
public putScopeConfiguration(value: IResolvable | NetworksecuritymanagerScopeScopeConfiguration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.putScopeConfiguration.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfiguration">NetworksecuritymanagerScopeScopeConfiguration</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetIsPublished` <a name="resetIsPublished" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.resetIsPublished"></a>

```typescript
public resetIsPublished(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetScopeConfiguration` <a name="resetScopeConfiguration" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.resetScopeConfiguration"></a>

```typescript
public resetScopeConfiguration(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NetworksecuritymanagerScope resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.isConstruct"></a>

```typescript
import { networksecuritymanagerScope } from '@cdktn/provider-aws'

networksecuritymanagerScope.NetworksecuritymanagerScope.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.isTerraformElement"></a>

```typescript
import { networksecuritymanagerScope } from '@cdktn/provider-aws'

networksecuritymanagerScope.NetworksecuritymanagerScope.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.isTerraformResource"></a>

```typescript
import { networksecuritymanagerScope } from '@cdktn/provider-aws'

networksecuritymanagerScope.NetworksecuritymanagerScope.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.generateConfigForImport"></a>

```typescript
import { networksecuritymanagerScope } from '@cdktn/provider-aws'

networksecuritymanagerScope.NetworksecuritymanagerScope.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a NetworksecuritymanagerScope resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworksecuritymanagerScope to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworksecuritymanagerScope that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NetworksecuritymanagerScope to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.scopeConfiguration">scopeConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList">NetworksecuritymanagerScopeScopeConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.tagsAll">tagsAll</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.isPublishedInput">isPublishedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.scopeConfigurationInput">scopeConfigurationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfiguration">NetworksecuritymanagerScopeScopeConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.isPublished">isPublished</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `scopeConfiguration`<sup>Required</sup> <a name="scopeConfiguration" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.scopeConfiguration"></a>

```typescript
public readonly scopeConfiguration: NetworksecuritymanagerScopeScopeConfigurationList;
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList">NetworksecuritymanagerScopeScopeConfigurationList</a>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `isPublishedInput`<sup>Optional</sup> <a name="isPublishedInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.isPublishedInput"></a>

```typescript
public readonly isPublishedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `scopeConfigurationInput`<sup>Optional</sup> <a name="scopeConfigurationInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.scopeConfigurationInput"></a>

```typescript
public readonly scopeConfigurationInput: IResolvable | NetworksecuritymanagerScopeScopeConfiguration[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfiguration">NetworksecuritymanagerScopeScopeConfiguration</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `isPublished`<sup>Required</sup> <a name="isPublished" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.isPublished"></a>

```typescript
public readonly isPublished: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScope.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworksecuritymanagerScopeConfig <a name="NetworksecuritymanagerScopeConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.Initializer"></a>

```typescript
import { networksecuritymanagerScope } from '@cdktn/provider-aws'

const networksecuritymanagerScopeConfig: networksecuritymanagerScope.NetworksecuritymanagerScopeConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#name NetworksecuritymanagerScope#name}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#description NetworksecuritymanagerScope#description}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.isPublished">isPublished</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#is_published NetworksecuritymanagerScope#is_published}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.scopeConfiguration">scopeConfiguration</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfiguration">NetworksecuritymanagerScopeScopeConfiguration</a>[]</code> | scope_configuration block. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#tags NetworksecuritymanagerScope#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#name NetworksecuritymanagerScope#name}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#description NetworksecuritymanagerScope#description}.

---

##### `isPublished`<sup>Optional</sup> <a name="isPublished" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.isPublished"></a>

```typescript
public readonly isPublished: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#is_published NetworksecuritymanagerScope#is_published}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#region NetworksecuritymanagerScope#region}

---

##### `scopeConfiguration`<sup>Optional</sup> <a name="scopeConfiguration" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.scopeConfiguration"></a>

```typescript
public readonly scopeConfiguration: IResolvable | NetworksecuritymanagerScopeScopeConfiguration[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfiguration">NetworksecuritymanagerScopeScopeConfiguration</a>[]

scope_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#scope_configuration NetworksecuritymanagerScope#scope_configuration}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#tags NetworksecuritymanagerScope#tags}.

---

### NetworksecuritymanagerScopeScopeConfiguration <a name="NetworksecuritymanagerScopeScopeConfiguration" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfiguration.Initializer"></a>

```typescript
import { networksecuritymanagerScope } from '@cdktn/provider-aws'

const networksecuritymanagerScopeScopeConfiguration: networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfiguration.property.accountFilter">accountFilter</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilter">NetworksecuritymanagerScopeScopeConfigurationAccountFilter</a>[]</code> | account_filter block. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfiguration.property.resourceScope">resourceScope</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScope">NetworksecuritymanagerScopeScopeConfigurationResourceScope</a>[]</code> | resource_scope block. |

---

##### `accountFilter`<sup>Optional</sup> <a name="accountFilter" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfiguration.property.accountFilter"></a>

```typescript
public readonly accountFilter: IResolvable | NetworksecuritymanagerScopeScopeConfigurationAccountFilter[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilter">NetworksecuritymanagerScopeScopeConfigurationAccountFilter</a>[]

account_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#account_filter NetworksecuritymanagerScope#account_filter}

---

##### `resourceScope`<sup>Optional</sup> <a name="resourceScope" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfiguration.property.resourceScope"></a>

```typescript
public readonly resourceScope: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScope[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScope">NetworksecuritymanagerScopeScopeConfigurationResourceScope</a>[]

resource_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#resource_scope NetworksecuritymanagerScope#resource_scope}

---

### NetworksecuritymanagerScopeScopeConfigurationAccountFilter <a name="NetworksecuritymanagerScopeScopeConfigurationAccountFilter" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilter.Initializer"></a>

```typescript
import { networksecuritymanagerScope } from '@cdktn/provider-aws'

const networksecuritymanagerScopeScopeConfigurationAccountFilter: networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilter.property.exclude">exclude</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExclude">NetworksecuritymanagerScopeScopeConfigurationAccountFilterExclude</a>[]</code> | exclude block. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilter.property.include">include</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterInclude">NetworksecuritymanagerScopeScopeConfigurationAccountFilterInclude</a>[]</code> | include block. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilter.property.includeAll">includeAll</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#include_all NetworksecuritymanagerScope#include_all}. |

---

##### `exclude`<sup>Optional</sup> <a name="exclude" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilter.property.exclude"></a>

```typescript
public readonly exclude: IResolvable | NetworksecuritymanagerScopeScopeConfigurationAccountFilterExclude[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExclude">NetworksecuritymanagerScopeScopeConfigurationAccountFilterExclude</a>[]

exclude block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#exclude NetworksecuritymanagerScope#exclude}

---

##### `include`<sup>Optional</sup> <a name="include" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilter.property.include"></a>

```typescript
public readonly include: IResolvable | NetworksecuritymanagerScopeScopeConfigurationAccountFilterInclude[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterInclude">NetworksecuritymanagerScopeScopeConfigurationAccountFilterInclude</a>[]

include block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#include NetworksecuritymanagerScope#include}

---

##### `includeAll`<sup>Optional</sup> <a name="includeAll" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilter.property.includeAll"></a>

```typescript
public readonly includeAll: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#include_all NetworksecuritymanagerScope#include_all}.

---

### NetworksecuritymanagerScopeScopeConfigurationAccountFilterExclude <a name="NetworksecuritymanagerScopeScopeConfigurationAccountFilterExclude" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExclude"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExclude.Initializer"></a>

```typescript
import { networksecuritymanagerScope } from '@cdktn/provider-aws'

const networksecuritymanagerScopeScopeConfigurationAccountFilterExclude: networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExclude = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExclude.property.accountIds">accountIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#account_ids NetworksecuritymanagerScope#account_ids}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExclude.property.organizationalUnits">organizationalUnits</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#organizational_units NetworksecuritymanagerScope#organizational_units}. |

---

##### `accountIds`<sup>Optional</sup> <a name="accountIds" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExclude.property.accountIds"></a>

```typescript
public readonly accountIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#account_ids NetworksecuritymanagerScope#account_ids}.

---

##### `organizationalUnits`<sup>Optional</sup> <a name="organizationalUnits" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExclude.property.organizationalUnits"></a>

```typescript
public readonly organizationalUnits: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#organizational_units NetworksecuritymanagerScope#organizational_units}.

---

### NetworksecuritymanagerScopeScopeConfigurationAccountFilterInclude <a name="NetworksecuritymanagerScopeScopeConfigurationAccountFilterInclude" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterInclude"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterInclude.Initializer"></a>

```typescript
import { networksecuritymanagerScope } from '@cdktn/provider-aws'

const networksecuritymanagerScopeScopeConfigurationAccountFilterInclude: networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterInclude = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterInclude.property.accountIds">accountIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#account_ids NetworksecuritymanagerScope#account_ids}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterInclude.property.organizationalUnits">organizationalUnits</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#organizational_units NetworksecuritymanagerScope#organizational_units}. |

---

##### `accountIds`<sup>Optional</sup> <a name="accountIds" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterInclude.property.accountIds"></a>

```typescript
public readonly accountIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#account_ids NetworksecuritymanagerScope#account_ids}.

---

##### `organizationalUnits`<sup>Optional</sup> <a name="organizationalUnits" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterInclude.property.organizationalUnits"></a>

```typescript
public readonly organizationalUnits: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#organizational_units NetworksecuritymanagerScope#organizational_units}.

---

### NetworksecuritymanagerScopeScopeConfigurationResourceScope <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScope" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScope.Initializer"></a>

```typescript
import { networksecuritymanagerScope } from '@cdktn/provider-aws'

const networksecuritymanagerScopeScopeConfigurationResourceScope: networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScope = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScope.property.resourceType">resourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#resource_type NetworksecuritymanagerScope#resource_type}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScope.property.exclude">exclude</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExclude">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExclude</a>[]</code> | exclude block. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScope.property.include">include</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeInclude">NetworksecuritymanagerScopeScopeConfigurationResourceScopeInclude</a>[]</code> | include block. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScope.property.includeAll">includeAll</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#include_all NetworksecuritymanagerScope#include_all}. |

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScope.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#resource_type NetworksecuritymanagerScope#resource_type}.

---

##### `exclude`<sup>Optional</sup> <a name="exclude" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScope.property.exclude"></a>

```typescript
public readonly exclude: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeExclude[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExclude">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExclude</a>[]

exclude block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#exclude NetworksecuritymanagerScope#exclude}

---

##### `include`<sup>Optional</sup> <a name="include" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScope.property.include"></a>

```typescript
public readonly include: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeInclude[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeInclude">NetworksecuritymanagerScopeScopeConfigurationResourceScopeInclude</a>[]

include block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#include NetworksecuritymanagerScope#include}

---

##### `includeAll`<sup>Optional</sup> <a name="includeAll" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScope.property.includeAll"></a>

```typescript
public readonly includeAll: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#include_all NetworksecuritymanagerScope#include_all}.

---

### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExclude <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExclude" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExclude"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExclude.Initializer"></a>

```typescript
import { networksecuritymanagerScope } from '@cdktn/provider-aws'

const networksecuritymanagerScopeScopeConfigurationResourceScopeExclude: networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExclude = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExclude.property.explicitArns">explicitArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#explicit_arns NetworksecuritymanagerScope#explicit_arns}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExclude.property.expression">expression</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression</a>[]</code> | expression block. |

---

##### `explicitArns`<sup>Optional</sup> <a name="explicitArns" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExclude.property.explicitArns"></a>

```typescript
public readonly explicitArns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#explicit_arns NetworksecuritymanagerScope#explicit_arns}.

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExclude.property.expression"></a>

```typescript
public readonly expression: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression</a>[]

expression block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#expression NetworksecuritymanagerScope#expression}

---

### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression.Initializer"></a>

```typescript
import { networksecuritymanagerScope } from '@cdktn/provider-aws'

const networksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression: networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression.property.and">and</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAnd">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAnd</a>[]</code> | and block. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression.property.criteria">criteria</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteria">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteria</a>[]</code> | criteria block. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression.property.not">not</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNot">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNot</a>[]</code> | not block. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression.property.or">or</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOr">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOr</a>[]</code> | or block. |

---

##### `and`<sup>Optional</sup> <a name="and" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression.property.and"></a>

```typescript
public readonly and: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAnd[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAnd">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAnd</a>[]

and block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#and NetworksecuritymanagerScope#and}

---

##### `criteria`<sup>Optional</sup> <a name="criteria" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression.property.criteria"></a>

```typescript
public readonly criteria: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteria[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteria">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteria</a>[]

criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#criteria NetworksecuritymanagerScope#criteria}

---

##### `not`<sup>Optional</sup> <a name="not" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression.property.not"></a>

```typescript
public readonly not: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNot[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNot">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNot</a>[]

not block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#not NetworksecuritymanagerScope#not}

---

##### `or`<sup>Optional</sup> <a name="or" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression.property.or"></a>

```typescript
public readonly or: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOr[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOr">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOr</a>[]

or block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#or NetworksecuritymanagerScope#or}

---

### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAnd <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAnd" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAnd"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAnd.Initializer"></a>

```typescript
import { networksecuritymanagerScope } from '@cdktn/provider-aws'

const networksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAnd: networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAnd = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAnd.property.albConfig">albConfig</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfig</a>[]</code> | alb_config block. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAnd.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#tags NetworksecuritymanagerScope#tags}. |

---

##### `albConfig`<sup>Optional</sup> <a name="albConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAnd.property.albConfig"></a>

```typescript
public readonly albConfig: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfig</a>[]

alb_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#alb_config NetworksecuritymanagerScope#alb_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAnd.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#tags NetworksecuritymanagerScope#tags}.

---

### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfig <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfig.Initializer"></a>

```typescript
import { networksecuritymanagerScope } from '@cdktn/provider-aws'

const networksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfig: networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfig.property.ipAddressType">ipAddressType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#ip_address_type NetworksecuritymanagerScope#ip_address_type}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfig.property.scheme">scheme</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#scheme NetworksecuritymanagerScope#scheme}. |

---

##### `ipAddressType`<sup>Optional</sup> <a name="ipAddressType" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfig.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#ip_address_type NetworksecuritymanagerScope#ip_address_type}.

---

##### `scheme`<sup>Optional</sup> <a name="scheme" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfig.property.scheme"></a>

```typescript
public readonly scheme: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#scheme NetworksecuritymanagerScope#scheme}.

---

### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteria <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteria" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteria.Initializer"></a>

```typescript
import { networksecuritymanagerScope } from '@cdktn/provider-aws'

const networksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteria: networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteria = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteria.property.albConfig">albConfig</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfig</a>[]</code> | alb_config block. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteria.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#tags NetworksecuritymanagerScope#tags}. |

---

##### `albConfig`<sup>Optional</sup> <a name="albConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteria.property.albConfig"></a>

```typescript
public readonly albConfig: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfig</a>[]

alb_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#alb_config NetworksecuritymanagerScope#alb_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteria.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#tags NetworksecuritymanagerScope#tags}.

---

### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfig <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfig.Initializer"></a>

```typescript
import { networksecuritymanagerScope } from '@cdktn/provider-aws'

const networksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfig: networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfig.property.ipAddressType">ipAddressType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#ip_address_type NetworksecuritymanagerScope#ip_address_type}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfig.property.scheme">scheme</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#scheme NetworksecuritymanagerScope#scheme}. |

---

##### `ipAddressType`<sup>Optional</sup> <a name="ipAddressType" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfig.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#ip_address_type NetworksecuritymanagerScope#ip_address_type}.

---

##### `scheme`<sup>Optional</sup> <a name="scheme" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfig.property.scheme"></a>

```typescript
public readonly scheme: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#scheme NetworksecuritymanagerScope#scheme}.

---

### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNot <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNot" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNot"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNot.Initializer"></a>

```typescript
import { networksecuritymanagerScope } from '@cdktn/provider-aws'

const networksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNot: networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNot = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNot.property.albConfig">albConfig</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfig</a>[]</code> | alb_config block. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNot.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#tags NetworksecuritymanagerScope#tags}. |

---

##### `albConfig`<sup>Optional</sup> <a name="albConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNot.property.albConfig"></a>

```typescript
public readonly albConfig: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfig</a>[]

alb_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#alb_config NetworksecuritymanagerScope#alb_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNot.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#tags NetworksecuritymanagerScope#tags}.

---

### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfig <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfig.Initializer"></a>

```typescript
import { networksecuritymanagerScope } from '@cdktn/provider-aws'

const networksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfig: networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfig.property.ipAddressType">ipAddressType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#ip_address_type NetworksecuritymanagerScope#ip_address_type}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfig.property.scheme">scheme</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#scheme NetworksecuritymanagerScope#scheme}. |

---

##### `ipAddressType`<sup>Optional</sup> <a name="ipAddressType" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfig.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#ip_address_type NetworksecuritymanagerScope#ip_address_type}.

---

##### `scheme`<sup>Optional</sup> <a name="scheme" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfig.property.scheme"></a>

```typescript
public readonly scheme: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#scheme NetworksecuritymanagerScope#scheme}.

---

### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOr <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOr" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOr"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOr.Initializer"></a>

```typescript
import { networksecuritymanagerScope } from '@cdktn/provider-aws'

const networksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOr: networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOr = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOr.property.albConfig">albConfig</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfig</a>[]</code> | alb_config block. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOr.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#tags NetworksecuritymanagerScope#tags}. |

---

##### `albConfig`<sup>Optional</sup> <a name="albConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOr.property.albConfig"></a>

```typescript
public readonly albConfig: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfig</a>[]

alb_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#alb_config NetworksecuritymanagerScope#alb_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOr.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#tags NetworksecuritymanagerScope#tags}.

---

### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfig <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfig.Initializer"></a>

```typescript
import { networksecuritymanagerScope } from '@cdktn/provider-aws'

const networksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfig: networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfig.property.ipAddressType">ipAddressType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#ip_address_type NetworksecuritymanagerScope#ip_address_type}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfig.property.scheme">scheme</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#scheme NetworksecuritymanagerScope#scheme}. |

---

##### `ipAddressType`<sup>Optional</sup> <a name="ipAddressType" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfig.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#ip_address_type NetworksecuritymanagerScope#ip_address_type}.

---

##### `scheme`<sup>Optional</sup> <a name="scheme" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfig.property.scheme"></a>

```typescript
public readonly scheme: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#scheme NetworksecuritymanagerScope#scheme}.

---

### NetworksecuritymanagerScopeScopeConfigurationResourceScopeInclude <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeInclude" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeInclude"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeInclude.Initializer"></a>

```typescript
import { networksecuritymanagerScope } from '@cdktn/provider-aws'

const networksecuritymanagerScopeScopeConfigurationResourceScopeInclude: networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeInclude = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeInclude.property.explicitArns">explicitArns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#explicit_arns NetworksecuritymanagerScope#explicit_arns}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeInclude.property.expression">expression</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression</a>[]</code> | expression block. |

---

##### `explicitArns`<sup>Optional</sup> <a name="explicitArns" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeInclude.property.explicitArns"></a>

```typescript
public readonly explicitArns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#explicit_arns NetworksecuritymanagerScope#explicit_arns}.

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeInclude.property.expression"></a>

```typescript
public readonly expression: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression</a>[]

expression block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#expression NetworksecuritymanagerScope#expression}

---

### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression.Initializer"></a>

```typescript
import { networksecuritymanagerScope } from '@cdktn/provider-aws'

const networksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression: networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression.property.and">and</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAnd">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAnd</a>[]</code> | and block. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression.property.criteria">criteria</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteria">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteria</a>[]</code> | criteria block. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression.property.not">not</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNot">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNot</a>[]</code> | not block. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression.property.or">or</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOr">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOr</a>[]</code> | or block. |

---

##### `and`<sup>Optional</sup> <a name="and" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression.property.and"></a>

```typescript
public readonly and: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAnd[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAnd">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAnd</a>[]

and block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#and NetworksecuritymanagerScope#and}

---

##### `criteria`<sup>Optional</sup> <a name="criteria" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression.property.criteria"></a>

```typescript
public readonly criteria: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteria[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteria">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteria</a>[]

criteria block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#criteria NetworksecuritymanagerScope#criteria}

---

##### `not`<sup>Optional</sup> <a name="not" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression.property.not"></a>

```typescript
public readonly not: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNot[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNot">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNot</a>[]

not block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#not NetworksecuritymanagerScope#not}

---

##### `or`<sup>Optional</sup> <a name="or" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression.property.or"></a>

```typescript
public readonly or: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOr[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOr">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOr</a>[]

or block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#or NetworksecuritymanagerScope#or}

---

### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAnd <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAnd" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAnd"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAnd.Initializer"></a>

```typescript
import { networksecuritymanagerScope } from '@cdktn/provider-aws'

const networksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAnd: networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAnd = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAnd.property.albConfig">albConfig</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfig</a>[]</code> | alb_config block. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAnd.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#tags NetworksecuritymanagerScope#tags}. |

---

##### `albConfig`<sup>Optional</sup> <a name="albConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAnd.property.albConfig"></a>

```typescript
public readonly albConfig: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfig</a>[]

alb_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#alb_config NetworksecuritymanagerScope#alb_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAnd.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#tags NetworksecuritymanagerScope#tags}.

---

### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfig <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfig.Initializer"></a>

```typescript
import { networksecuritymanagerScope } from '@cdktn/provider-aws'

const networksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfig: networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfig.property.ipAddressType">ipAddressType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#ip_address_type NetworksecuritymanagerScope#ip_address_type}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfig.property.scheme">scheme</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#scheme NetworksecuritymanagerScope#scheme}. |

---

##### `ipAddressType`<sup>Optional</sup> <a name="ipAddressType" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfig.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#ip_address_type NetworksecuritymanagerScope#ip_address_type}.

---

##### `scheme`<sup>Optional</sup> <a name="scheme" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfig.property.scheme"></a>

```typescript
public readonly scheme: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#scheme NetworksecuritymanagerScope#scheme}.

---

### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteria <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteria" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteria"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteria.Initializer"></a>

```typescript
import { networksecuritymanagerScope } from '@cdktn/provider-aws'

const networksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteria: networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteria = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteria.property.albConfig">albConfig</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfig</a>[]</code> | alb_config block. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteria.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#tags NetworksecuritymanagerScope#tags}. |

---

##### `albConfig`<sup>Optional</sup> <a name="albConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteria.property.albConfig"></a>

```typescript
public readonly albConfig: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfig</a>[]

alb_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#alb_config NetworksecuritymanagerScope#alb_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteria.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#tags NetworksecuritymanagerScope#tags}.

---

### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfig <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfig.Initializer"></a>

```typescript
import { networksecuritymanagerScope } from '@cdktn/provider-aws'

const networksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfig: networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfig.property.ipAddressType">ipAddressType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#ip_address_type NetworksecuritymanagerScope#ip_address_type}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfig.property.scheme">scheme</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#scheme NetworksecuritymanagerScope#scheme}. |

---

##### `ipAddressType`<sup>Optional</sup> <a name="ipAddressType" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfig.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#ip_address_type NetworksecuritymanagerScope#ip_address_type}.

---

##### `scheme`<sup>Optional</sup> <a name="scheme" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfig.property.scheme"></a>

```typescript
public readonly scheme: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#scheme NetworksecuritymanagerScope#scheme}.

---

### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNot <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNot" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNot"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNot.Initializer"></a>

```typescript
import { networksecuritymanagerScope } from '@cdktn/provider-aws'

const networksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNot: networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNot = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNot.property.albConfig">albConfig</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfig</a>[]</code> | alb_config block. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNot.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#tags NetworksecuritymanagerScope#tags}. |

---

##### `albConfig`<sup>Optional</sup> <a name="albConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNot.property.albConfig"></a>

```typescript
public readonly albConfig: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfig</a>[]

alb_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#alb_config NetworksecuritymanagerScope#alb_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNot.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#tags NetworksecuritymanagerScope#tags}.

---

### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfig <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfig.Initializer"></a>

```typescript
import { networksecuritymanagerScope } from '@cdktn/provider-aws'

const networksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfig: networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfig.property.ipAddressType">ipAddressType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#ip_address_type NetworksecuritymanagerScope#ip_address_type}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfig.property.scheme">scheme</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#scheme NetworksecuritymanagerScope#scheme}. |

---

##### `ipAddressType`<sup>Optional</sup> <a name="ipAddressType" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfig.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#ip_address_type NetworksecuritymanagerScope#ip_address_type}.

---

##### `scheme`<sup>Optional</sup> <a name="scheme" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfig.property.scheme"></a>

```typescript
public readonly scheme: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#scheme NetworksecuritymanagerScope#scheme}.

---

### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOr <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOr" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOr"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOr.Initializer"></a>

```typescript
import { networksecuritymanagerScope } from '@cdktn/provider-aws'

const networksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOr: networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOr = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOr.property.albConfig">albConfig</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfig</a>[]</code> | alb_config block. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOr.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#tags NetworksecuritymanagerScope#tags}. |

---

##### `albConfig`<sup>Optional</sup> <a name="albConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOr.property.albConfig"></a>

```typescript
public readonly albConfig: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfig</a>[]

alb_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#alb_config NetworksecuritymanagerScope#alb_config}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOr.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#tags NetworksecuritymanagerScope#tags}.

---

### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfig <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfig.Initializer"></a>

```typescript
import { networksecuritymanagerScope } from '@cdktn/provider-aws'

const networksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfig: networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfig.property.ipAddressType">ipAddressType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#ip_address_type NetworksecuritymanagerScope#ip_address_type}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfig.property.scheme">scheme</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#scheme NetworksecuritymanagerScope#scheme}. |

---

##### `ipAddressType`<sup>Optional</sup> <a name="ipAddressType" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfig.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#ip_address_type NetworksecuritymanagerScope#ip_address_type}.

---

##### `scheme`<sup>Optional</sup> <a name="scheme" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfig.property.scheme"></a>

```typescript
public readonly scheme: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_scope#scheme NetworksecuritymanagerScope#scheme}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList <a name="NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList.Initializer"></a>

```typescript
import { networksecuritymanagerScope } from '@cdktn/provider-aws'

new networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList.get"></a>

```typescript
public get(index: number): NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExclude">NetworksecuritymanagerScopeScopeConfigurationAccountFilterExclude</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworksecuritymanagerScopeScopeConfigurationAccountFilterExclude[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExclude">NetworksecuritymanagerScopeScopeConfigurationAccountFilterExclude</a>[]

---


### NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference <a name="NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.Initializer"></a>

```typescript
import { networksecuritymanagerScope } from '@cdktn/provider-aws'

new networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.resetAccountIds">resetAccountIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.resetOrganizationalUnits">resetOrganizationalUnits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccountIds` <a name="resetAccountIds" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.resetAccountIds"></a>

```typescript
public resetAccountIds(): void
```

##### `resetOrganizationalUnits` <a name="resetOrganizationalUnits" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.resetOrganizationalUnits"></a>

```typescript
public resetOrganizationalUnits(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.property.accountIdsInput">accountIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.property.organizationalUnitsInput">organizationalUnitsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.property.accountIds">accountIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.property.organizationalUnits">organizationalUnits</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExclude">NetworksecuritymanagerScopeScopeConfigurationAccountFilterExclude</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountIdsInput`<sup>Optional</sup> <a name="accountIdsInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.property.accountIdsInput"></a>

```typescript
public readonly accountIdsInput: string[];
```

- *Type:* string[]

---

##### `organizationalUnitsInput`<sup>Optional</sup> <a name="organizationalUnitsInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.property.organizationalUnitsInput"></a>

```typescript
public readonly organizationalUnitsInput: string[];
```

- *Type:* string[]

---

##### `accountIds`<sup>Required</sup> <a name="accountIds" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.property.accountIds"></a>

```typescript
public readonly accountIds: string[];
```

- *Type:* string[]

---

##### `organizationalUnits`<sup>Required</sup> <a name="organizationalUnits" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.property.organizationalUnits"></a>

```typescript
public readonly organizationalUnits: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworksecuritymanagerScopeScopeConfigurationAccountFilterExclude;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExclude">NetworksecuritymanagerScopeScopeConfigurationAccountFilterExclude</a>

---


### NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList <a name="NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList.Initializer"></a>

```typescript
import { networksecuritymanagerScope } from '@cdktn/provider-aws'

new networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList.get"></a>

```typescript
public get(index: number): NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterInclude">NetworksecuritymanagerScopeScopeConfigurationAccountFilterInclude</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworksecuritymanagerScopeScopeConfigurationAccountFilterInclude[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterInclude">NetworksecuritymanagerScopeScopeConfigurationAccountFilterInclude</a>[]

---


### NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference <a name="NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.Initializer"></a>

```typescript
import { networksecuritymanagerScope } from '@cdktn/provider-aws'

new networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.resetAccountIds">resetAccountIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.resetOrganizationalUnits">resetOrganizationalUnits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccountIds` <a name="resetAccountIds" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.resetAccountIds"></a>

```typescript
public resetAccountIds(): void
```

##### `resetOrganizationalUnits` <a name="resetOrganizationalUnits" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.resetOrganizationalUnits"></a>

```typescript
public resetOrganizationalUnits(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.property.accountIdsInput">accountIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.property.organizationalUnitsInput">organizationalUnitsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.property.accountIds">accountIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.property.organizationalUnits">organizationalUnits</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterInclude">NetworksecuritymanagerScopeScopeConfigurationAccountFilterInclude</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountIdsInput`<sup>Optional</sup> <a name="accountIdsInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.property.accountIdsInput"></a>

```typescript
public readonly accountIdsInput: string[];
```

- *Type:* string[]

---

##### `organizationalUnitsInput`<sup>Optional</sup> <a name="organizationalUnitsInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.property.organizationalUnitsInput"></a>

```typescript
public readonly organizationalUnitsInput: string[];
```

- *Type:* string[]

---

##### `accountIds`<sup>Required</sup> <a name="accountIds" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.property.accountIds"></a>

```typescript
public readonly accountIds: string[];
```

- *Type:* string[]

---

##### `organizationalUnits`<sup>Required</sup> <a name="organizationalUnits" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.property.organizationalUnits"></a>

```typescript
public readonly organizationalUnits: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworksecuritymanagerScopeScopeConfigurationAccountFilterInclude;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterInclude">NetworksecuritymanagerScopeScopeConfigurationAccountFilterInclude</a>

---


### NetworksecuritymanagerScopeScopeConfigurationAccountFilterList <a name="NetworksecuritymanagerScopeScopeConfigurationAccountFilterList" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList.Initializer"></a>

```typescript
import { networksecuritymanagerScope } from '@cdktn/provider-aws'

new networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList.get"></a>

```typescript
public get(index: number): NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilter">NetworksecuritymanagerScopeScopeConfigurationAccountFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworksecuritymanagerScopeScopeConfigurationAccountFilter[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilter">NetworksecuritymanagerScopeScopeConfigurationAccountFilter</a>[]

---


### NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference <a name="NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.Initializer"></a>

```typescript
import { networksecuritymanagerScope } from '@cdktn/provider-aws'

new networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.putExclude">putExclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.putInclude">putInclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.resetExclude">resetExclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.resetInclude">resetInclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.resetIncludeAll">resetIncludeAll</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExclude` <a name="putExclude" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.putExclude"></a>

```typescript
public putExclude(value: IResolvable | NetworksecuritymanagerScopeScopeConfigurationAccountFilterExclude[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.putExclude.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExclude">NetworksecuritymanagerScopeScopeConfigurationAccountFilterExclude</a>[]

---

##### `putInclude` <a name="putInclude" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.putInclude"></a>

```typescript
public putInclude(value: IResolvable | NetworksecuritymanagerScopeScopeConfigurationAccountFilterInclude[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.putInclude.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterInclude">NetworksecuritymanagerScopeScopeConfigurationAccountFilterInclude</a>[]

---

##### `resetExclude` <a name="resetExclude" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.resetExclude"></a>

```typescript
public resetExclude(): void
```

##### `resetInclude` <a name="resetInclude" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.resetInclude"></a>

```typescript
public resetInclude(): void
```

##### `resetIncludeAll` <a name="resetIncludeAll" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.resetIncludeAll"></a>

```typescript
public resetIncludeAll(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.property.exclude">exclude</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList">NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.property.include">include</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList">NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.property.excludeInput">excludeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExclude">NetworksecuritymanagerScopeScopeConfigurationAccountFilterExclude</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.property.includeAllInput">includeAllInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.property.includeInput">includeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterInclude">NetworksecuritymanagerScopeScopeConfigurationAccountFilterInclude</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.property.includeAll">includeAll</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilter">NetworksecuritymanagerScopeScopeConfigurationAccountFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.property.exclude"></a>

```typescript
public readonly exclude: NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList;
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList">NetworksecuritymanagerScopeScopeConfigurationAccountFilterExcludeList</a>

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.property.include"></a>

```typescript
public readonly include: NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList;
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList">NetworksecuritymanagerScopeScopeConfigurationAccountFilterIncludeList</a>

---

##### `excludeInput`<sup>Optional</sup> <a name="excludeInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.property.excludeInput"></a>

```typescript
public readonly excludeInput: IResolvable | NetworksecuritymanagerScopeScopeConfigurationAccountFilterExclude[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterExclude">NetworksecuritymanagerScopeScopeConfigurationAccountFilterExclude</a>[]

---

##### `includeAllInput`<sup>Optional</sup> <a name="includeAllInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.property.includeAllInput"></a>

```typescript
public readonly includeAllInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `includeInput`<sup>Optional</sup> <a name="includeInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.property.includeInput"></a>

```typescript
public readonly includeInput: IResolvable | NetworksecuritymanagerScopeScopeConfigurationAccountFilterInclude[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterInclude">NetworksecuritymanagerScopeScopeConfigurationAccountFilterInclude</a>[]

---

##### `includeAll`<sup>Required</sup> <a name="includeAll" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.property.includeAll"></a>

```typescript
public readonly includeAll: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworksecuritymanagerScopeScopeConfigurationAccountFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilter">NetworksecuritymanagerScopeScopeConfigurationAccountFilter</a>

---


### NetworksecuritymanagerScopeScopeConfigurationList <a name="NetworksecuritymanagerScopeScopeConfigurationList" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList.Initializer"></a>

```typescript
import { networksecuritymanagerScope } from '@cdktn/provider-aws'

new networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList.get"></a>

```typescript
public get(index: number): NetworksecuritymanagerScopeScopeConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfiguration">NetworksecuritymanagerScopeScopeConfiguration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworksecuritymanagerScopeScopeConfiguration[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfiguration">NetworksecuritymanagerScopeScopeConfiguration</a>[]

---


### NetworksecuritymanagerScopeScopeConfigurationOutputReference <a name="NetworksecuritymanagerScopeScopeConfigurationOutputReference" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.Initializer"></a>

```typescript
import { networksecuritymanagerScope } from '@cdktn/provider-aws'

new networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.putAccountFilter">putAccountFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.putResourceScope">putResourceScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.resetAccountFilter">resetAccountFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.resetResourceScope">resetResourceScope</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAccountFilter` <a name="putAccountFilter" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.putAccountFilter"></a>

```typescript
public putAccountFilter(value: IResolvable | NetworksecuritymanagerScopeScopeConfigurationAccountFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.putAccountFilter.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilter">NetworksecuritymanagerScopeScopeConfigurationAccountFilter</a>[]

---

##### `putResourceScope` <a name="putResourceScope" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.putResourceScope"></a>

```typescript
public putResourceScope(value: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScope[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.putResourceScope.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScope">NetworksecuritymanagerScopeScopeConfigurationResourceScope</a>[]

---

##### `resetAccountFilter` <a name="resetAccountFilter" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.resetAccountFilter"></a>

```typescript
public resetAccountFilter(): void
```

##### `resetResourceScope` <a name="resetResourceScope" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.resetResourceScope"></a>

```typescript
public resetResourceScope(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.property.accountFilter">accountFilter</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList">NetworksecuritymanagerScopeScopeConfigurationAccountFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.property.resourceScope">resourceScope</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.property.accountFilterInput">accountFilterInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilter">NetworksecuritymanagerScopeScopeConfigurationAccountFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.property.resourceScopeInput">resourceScopeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScope">NetworksecuritymanagerScopeScopeConfigurationResourceScope</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfiguration">NetworksecuritymanagerScopeScopeConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountFilter`<sup>Required</sup> <a name="accountFilter" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.property.accountFilter"></a>

```typescript
public readonly accountFilter: NetworksecuritymanagerScopeScopeConfigurationAccountFilterList;
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilterList">NetworksecuritymanagerScopeScopeConfigurationAccountFilterList</a>

---

##### `resourceScope`<sup>Required</sup> <a name="resourceScope" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.property.resourceScope"></a>

```typescript
public readonly resourceScope: NetworksecuritymanagerScopeScopeConfigurationResourceScopeList;
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeList</a>

---

##### `accountFilterInput`<sup>Optional</sup> <a name="accountFilterInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.property.accountFilterInput"></a>

```typescript
public readonly accountFilterInput: IResolvable | NetworksecuritymanagerScopeScopeConfigurationAccountFilter[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationAccountFilter">NetworksecuritymanagerScopeScopeConfigurationAccountFilter</a>[]

---

##### `resourceScopeInput`<sup>Optional</sup> <a name="resourceScopeInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.property.resourceScopeInput"></a>

```typescript
public readonly resourceScopeInput: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScope[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScope">NetworksecuritymanagerScopeScopeConfigurationResourceScope</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworksecuritymanagerScopeScopeConfiguration;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfiguration">NetworksecuritymanagerScopeScopeConfiguration</a>

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList.Initializer"></a>

```typescript
import { networksecuritymanagerScope } from '@cdktn/provider-aws'

new networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList.get"></a>

```typescript
public get(index: number): NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfig</a>[]

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.Initializer"></a>

```typescript
import { networksecuritymanagerScope } from '@cdktn/provider-aws'

new networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.resetIpAddressType">resetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.resetScheme">resetScheme</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIpAddressType` <a name="resetIpAddressType" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.resetIpAddressType"></a>

```typescript
public resetIpAddressType(): void
```

##### `resetScheme` <a name="resetScheme" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.resetScheme"></a>

```typescript
public resetScheme(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.property.ipAddressTypeInput">ipAddressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.property.schemeInput">schemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.property.ipAddressType">ipAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.property.scheme">scheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipAddressTypeInput`<sup>Optional</sup> <a name="ipAddressTypeInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.property.ipAddressTypeInput"></a>

```typescript
public readonly ipAddressTypeInput: string;
```

- *Type:* string

---

##### `schemeInput`<sup>Optional</sup> <a name="schemeInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.property.schemeInput"></a>

```typescript
public readonly schemeInput: string;
```

- *Type:* string

---

##### `ipAddressType`<sup>Required</sup> <a name="ipAddressType" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: string;
```

- *Type:* string

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.property.scheme"></a>

```typescript
public readonly scheme: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfig</a>

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList.Initializer"></a>

```typescript
import { networksecuritymanagerScope } from '@cdktn/provider-aws'

new networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList.get"></a>

```typescript
public get(index: number): NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAnd">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAnd</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAnd[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAnd">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAnd</a>[]

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.Initializer"></a>

```typescript
import { networksecuritymanagerScope } from '@cdktn/provider-aws'

new networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.putAlbConfig">putAlbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.resetAlbConfig">resetAlbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAlbConfig` <a name="putAlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.putAlbConfig"></a>

```typescript
public putAlbConfig(value: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.putAlbConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfig</a>[]

---

##### `resetAlbConfig` <a name="resetAlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.resetAlbConfig"></a>

```typescript
public resetAlbConfig(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.property.albConfig">albConfig</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.property.albConfigInput">albConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAnd">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAnd</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `albConfig`<sup>Required</sup> <a name="albConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.property.albConfig"></a>

```typescript
public readonly albConfig: NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList;
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfigList</a>

---

##### `albConfigInput`<sup>Optional</sup> <a name="albConfigInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.property.albConfigInput"></a>

```typescript
public readonly albConfigInput: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndAlbConfig</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAnd;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAnd">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAnd</a>

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList.Initializer"></a>

```typescript
import { networksecuritymanagerScope } from '@cdktn/provider-aws'

new networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList.get"></a>

```typescript
public get(index: number): NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfig</a>[]

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.Initializer"></a>

```typescript
import { networksecuritymanagerScope } from '@cdktn/provider-aws'

new networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.resetIpAddressType">resetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.resetScheme">resetScheme</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIpAddressType` <a name="resetIpAddressType" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.resetIpAddressType"></a>

```typescript
public resetIpAddressType(): void
```

##### `resetScheme` <a name="resetScheme" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.resetScheme"></a>

```typescript
public resetScheme(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.property.ipAddressTypeInput">ipAddressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.property.schemeInput">schemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.property.ipAddressType">ipAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.property.scheme">scheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipAddressTypeInput`<sup>Optional</sup> <a name="ipAddressTypeInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.property.ipAddressTypeInput"></a>

```typescript
public readonly ipAddressTypeInput: string;
```

- *Type:* string

---

##### `schemeInput`<sup>Optional</sup> <a name="schemeInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.property.schemeInput"></a>

```typescript
public readonly schemeInput: string;
```

- *Type:* string

---

##### `ipAddressType`<sup>Required</sup> <a name="ipAddressType" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: string;
```

- *Type:* string

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.property.scheme"></a>

```typescript
public readonly scheme: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfig</a>

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList.Initializer"></a>

```typescript
import { networksecuritymanagerScope } from '@cdktn/provider-aws'

new networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList.get"></a>

```typescript
public get(index: number): NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteria">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteria</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteria[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteria">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteria</a>[]

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.Initializer"></a>

```typescript
import { networksecuritymanagerScope } from '@cdktn/provider-aws'

new networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.putAlbConfig">putAlbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.resetAlbConfig">resetAlbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAlbConfig` <a name="putAlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.putAlbConfig"></a>

```typescript
public putAlbConfig(value: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.putAlbConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfig</a>[]

---

##### `resetAlbConfig` <a name="resetAlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.resetAlbConfig"></a>

```typescript
public resetAlbConfig(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.property.albConfig">albConfig</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.property.albConfigInput">albConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteria">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `albConfig`<sup>Required</sup> <a name="albConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.property.albConfig"></a>

```typescript
public readonly albConfig: NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList;
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfigList</a>

---

##### `albConfigInput`<sup>Optional</sup> <a name="albConfigInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.property.albConfigInput"></a>

```typescript
public readonly albConfigInput: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaAlbConfig</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteria;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteria">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteria</a>

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList.Initializer"></a>

```typescript
import { networksecuritymanagerScope } from '@cdktn/provider-aws'

new networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList.get"></a>

```typescript
public get(index: number): NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression</a>[]

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList.Initializer"></a>

```typescript
import { networksecuritymanagerScope } from '@cdktn/provider-aws'

new networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList.get"></a>

```typescript
public get(index: number): NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfig</a>[]

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.Initializer"></a>

```typescript
import { networksecuritymanagerScope } from '@cdktn/provider-aws'

new networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.resetIpAddressType">resetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.resetScheme">resetScheme</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIpAddressType` <a name="resetIpAddressType" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.resetIpAddressType"></a>

```typescript
public resetIpAddressType(): void
```

##### `resetScheme` <a name="resetScheme" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.resetScheme"></a>

```typescript
public resetScheme(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.property.ipAddressTypeInput">ipAddressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.property.schemeInput">schemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.property.ipAddressType">ipAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.property.scheme">scheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipAddressTypeInput`<sup>Optional</sup> <a name="ipAddressTypeInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.property.ipAddressTypeInput"></a>

```typescript
public readonly ipAddressTypeInput: string;
```

- *Type:* string

---

##### `schemeInput`<sup>Optional</sup> <a name="schemeInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.property.schemeInput"></a>

```typescript
public readonly schemeInput: string;
```

- *Type:* string

---

##### `ipAddressType`<sup>Required</sup> <a name="ipAddressType" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: string;
```

- *Type:* string

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.property.scheme"></a>

```typescript
public readonly scheme: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfig</a>

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList.Initializer"></a>

```typescript
import { networksecuritymanagerScope } from '@cdktn/provider-aws'

new networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList.get"></a>

```typescript
public get(index: number): NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNot">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNot</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNot[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNot">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNot</a>[]

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.Initializer"></a>

```typescript
import { networksecuritymanagerScope } from '@cdktn/provider-aws'

new networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.putAlbConfig">putAlbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.resetAlbConfig">resetAlbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAlbConfig` <a name="putAlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.putAlbConfig"></a>

```typescript
public putAlbConfig(value: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.putAlbConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfig</a>[]

---

##### `resetAlbConfig` <a name="resetAlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.resetAlbConfig"></a>

```typescript
public resetAlbConfig(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.property.albConfig">albConfig</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.property.albConfigInput">albConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNot">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNot</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `albConfig`<sup>Required</sup> <a name="albConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.property.albConfig"></a>

```typescript
public readonly albConfig: NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList;
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfigList</a>

---

##### `albConfigInput`<sup>Optional</sup> <a name="albConfigInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.property.albConfigInput"></a>

```typescript
public readonly albConfigInput: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotAlbConfig</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNot;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNot">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNot</a>

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList.Initializer"></a>

```typescript
import { networksecuritymanagerScope } from '@cdktn/provider-aws'

new networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList.get"></a>

```typescript
public get(index: number): NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfig</a>[]

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.Initializer"></a>

```typescript
import { networksecuritymanagerScope } from '@cdktn/provider-aws'

new networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.resetIpAddressType">resetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.resetScheme">resetScheme</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIpAddressType` <a name="resetIpAddressType" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.resetIpAddressType"></a>

```typescript
public resetIpAddressType(): void
```

##### `resetScheme` <a name="resetScheme" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.resetScheme"></a>

```typescript
public resetScheme(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.property.ipAddressTypeInput">ipAddressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.property.schemeInput">schemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.property.ipAddressType">ipAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.property.scheme">scheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipAddressTypeInput`<sup>Optional</sup> <a name="ipAddressTypeInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.property.ipAddressTypeInput"></a>

```typescript
public readonly ipAddressTypeInput: string;
```

- *Type:* string

---

##### `schemeInput`<sup>Optional</sup> <a name="schemeInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.property.schemeInput"></a>

```typescript
public readonly schemeInput: string;
```

- *Type:* string

---

##### `ipAddressType`<sup>Required</sup> <a name="ipAddressType" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: string;
```

- *Type:* string

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.property.scheme"></a>

```typescript
public readonly scheme: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfig</a>

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList.Initializer"></a>

```typescript
import { networksecuritymanagerScope } from '@cdktn/provider-aws'

new networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList.get"></a>

```typescript
public get(index: number): NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOr">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOr</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOr[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOr">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOr</a>[]

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.Initializer"></a>

```typescript
import { networksecuritymanagerScope } from '@cdktn/provider-aws'

new networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.putAlbConfig">putAlbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.resetAlbConfig">resetAlbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAlbConfig` <a name="putAlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.putAlbConfig"></a>

```typescript
public putAlbConfig(value: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.putAlbConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfig</a>[]

---

##### `resetAlbConfig` <a name="resetAlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.resetAlbConfig"></a>

```typescript
public resetAlbConfig(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.property.albConfig">albConfig</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.property.albConfigInput">albConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOr">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOr</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `albConfig`<sup>Required</sup> <a name="albConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.property.albConfig"></a>

```typescript
public readonly albConfig: NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList;
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfigList</a>

---

##### `albConfigInput`<sup>Optional</sup> <a name="albConfigInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.property.albConfigInput"></a>

```typescript
public readonly albConfigInput: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrAlbConfig</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOr;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOr">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOr</a>

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.Initializer"></a>

```typescript
import { networksecuritymanagerScope } from '@cdktn/provider-aws'

new networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.putAnd">putAnd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.putCriteria">putCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.putNot">putNot</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.putOr">putOr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.resetAnd">resetAnd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.resetCriteria">resetCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.resetNot">resetNot</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.resetOr">resetOr</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAnd` <a name="putAnd" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.putAnd"></a>

```typescript
public putAnd(value: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAnd[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.putAnd.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAnd">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAnd</a>[]

---

##### `putCriteria` <a name="putCriteria" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.putCriteria"></a>

```typescript
public putCriteria(value: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteria[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.putCriteria.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteria">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteria</a>[]

---

##### `putNot` <a name="putNot" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.putNot"></a>

```typescript
public putNot(value: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNot[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.putNot.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNot">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNot</a>[]

---

##### `putOr` <a name="putOr" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.putOr"></a>

```typescript
public putOr(value: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOr[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.putOr.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOr">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOr</a>[]

---

##### `resetAnd` <a name="resetAnd" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.resetAnd"></a>

```typescript
public resetAnd(): void
```

##### `resetCriteria` <a name="resetCriteria" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.resetCriteria"></a>

```typescript
public resetCriteria(): void
```

##### `resetNot` <a name="resetNot" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.resetNot"></a>

```typescript
public resetNot(): void
```

##### `resetOr` <a name="resetOr" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.resetOr"></a>

```typescript
public resetOr(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.property.and">and</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.property.criteria">criteria</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.property.not">not</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.property.or">or</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.property.andInput">andInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAnd">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAnd</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.property.criteriaInput">criteriaInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteria">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteria</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.property.notInput">notInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNot">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNot</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.property.orInput">orInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOr">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOr</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `and`<sup>Required</sup> <a name="and" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.property.and"></a>

```typescript
public readonly and: NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList;
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAndList</a>

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.property.criteria"></a>

```typescript
public readonly criteria: NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList;
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteriaList</a>

---

##### `not`<sup>Required</sup> <a name="not" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.property.not"></a>

```typescript
public readonly not: NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList;
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNotList</a>

---

##### `or`<sup>Required</sup> <a name="or" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.property.or"></a>

```typescript
public readonly or: NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList;
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOrList</a>

---

##### `andInput`<sup>Optional</sup> <a name="andInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.property.andInput"></a>

```typescript
public readonly andInput: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAnd[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAnd">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionAnd</a>[]

---

##### `criteriaInput`<sup>Optional</sup> <a name="criteriaInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.property.criteriaInput"></a>

```typescript
public readonly criteriaInput: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteria[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteria">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionCriteria</a>[]

---

##### `notInput`<sup>Optional</sup> <a name="notInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.property.notInput"></a>

```typescript
public readonly notInput: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNot[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNot">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionNot</a>[]

---

##### `orInput`<sup>Optional</sup> <a name="orInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.property.orInput"></a>

```typescript
public readonly orInput: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOr[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOr">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOr</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression</a>

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList.Initializer"></a>

```typescript
import { networksecuritymanagerScope } from '@cdktn/provider-aws'

new networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList.get"></a>

```typescript
public get(index: number): NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExclude">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExclude</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeExclude[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExclude">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExclude</a>[]

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.Initializer"></a>

```typescript
import { networksecuritymanagerScope } from '@cdktn/provider-aws'

new networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.putExpression">putExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.resetExplicitArns">resetExplicitArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.resetExpression">resetExpression</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExpression` <a name="putExpression" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.putExpression"></a>

```typescript
public putExpression(value: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.putExpression.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression</a>[]

---

##### `resetExplicitArns` <a name="resetExplicitArns" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.resetExplicitArns"></a>

```typescript
public resetExplicitArns(): void
```

##### `resetExpression` <a name="resetExpression" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.resetExpression"></a>

```typescript
public resetExpression(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.property.expression">expression</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.property.explicitArnsInput">explicitArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.property.expressionInput">expressionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.property.explicitArns">explicitArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExclude">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExclude</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.property.expression"></a>

```typescript
public readonly expression: NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList;
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpressionList</a>

---

##### `explicitArnsInput`<sup>Optional</sup> <a name="explicitArnsInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.property.explicitArnsInput"></a>

```typescript
public readonly explicitArnsInput: string[];
```

- *Type:* string[]

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeExpression</a>[]

---

##### `explicitArns`<sup>Required</sup> <a name="explicitArns" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.property.explicitArns"></a>

```typescript
public readonly explicitArns: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeExclude;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExclude">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExclude</a>

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList.Initializer"></a>

```typescript
import { networksecuritymanagerScope } from '@cdktn/provider-aws'

new networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList.get"></a>

```typescript
public get(index: number): NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfig</a>[]

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.Initializer"></a>

```typescript
import { networksecuritymanagerScope } from '@cdktn/provider-aws'

new networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.resetIpAddressType">resetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.resetScheme">resetScheme</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIpAddressType` <a name="resetIpAddressType" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.resetIpAddressType"></a>

```typescript
public resetIpAddressType(): void
```

##### `resetScheme` <a name="resetScheme" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.resetScheme"></a>

```typescript
public resetScheme(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.property.ipAddressTypeInput">ipAddressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.property.schemeInput">schemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.property.ipAddressType">ipAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.property.scheme">scheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipAddressTypeInput`<sup>Optional</sup> <a name="ipAddressTypeInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.property.ipAddressTypeInput"></a>

```typescript
public readonly ipAddressTypeInput: string;
```

- *Type:* string

---

##### `schemeInput`<sup>Optional</sup> <a name="schemeInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.property.schemeInput"></a>

```typescript
public readonly schemeInput: string;
```

- *Type:* string

---

##### `ipAddressType`<sup>Required</sup> <a name="ipAddressType" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: string;
```

- *Type:* string

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.property.scheme"></a>

```typescript
public readonly scheme: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfig</a>

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList.Initializer"></a>

```typescript
import { networksecuritymanagerScope } from '@cdktn/provider-aws'

new networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList.get"></a>

```typescript
public get(index: number): NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAnd">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAnd</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAnd[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAnd">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAnd</a>[]

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.Initializer"></a>

```typescript
import { networksecuritymanagerScope } from '@cdktn/provider-aws'

new networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.putAlbConfig">putAlbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.resetAlbConfig">resetAlbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAlbConfig` <a name="putAlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.putAlbConfig"></a>

```typescript
public putAlbConfig(value: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.putAlbConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfig</a>[]

---

##### `resetAlbConfig` <a name="resetAlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.resetAlbConfig"></a>

```typescript
public resetAlbConfig(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.property.albConfig">albConfig</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.property.albConfigInput">albConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAnd">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAnd</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `albConfig`<sup>Required</sup> <a name="albConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.property.albConfig"></a>

```typescript
public readonly albConfig: NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList;
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfigList</a>

---

##### `albConfigInput`<sup>Optional</sup> <a name="albConfigInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.property.albConfigInput"></a>

```typescript
public readonly albConfigInput: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndAlbConfig</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAnd;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAnd">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAnd</a>

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList.Initializer"></a>

```typescript
import { networksecuritymanagerScope } from '@cdktn/provider-aws'

new networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList.get"></a>

```typescript
public get(index: number): NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfig</a>[]

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.Initializer"></a>

```typescript
import { networksecuritymanagerScope } from '@cdktn/provider-aws'

new networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.resetIpAddressType">resetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.resetScheme">resetScheme</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIpAddressType` <a name="resetIpAddressType" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.resetIpAddressType"></a>

```typescript
public resetIpAddressType(): void
```

##### `resetScheme` <a name="resetScheme" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.resetScheme"></a>

```typescript
public resetScheme(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.property.ipAddressTypeInput">ipAddressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.property.schemeInput">schemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.property.ipAddressType">ipAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.property.scheme">scheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipAddressTypeInput`<sup>Optional</sup> <a name="ipAddressTypeInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.property.ipAddressTypeInput"></a>

```typescript
public readonly ipAddressTypeInput: string;
```

- *Type:* string

---

##### `schemeInput`<sup>Optional</sup> <a name="schemeInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.property.schemeInput"></a>

```typescript
public readonly schemeInput: string;
```

- *Type:* string

---

##### `ipAddressType`<sup>Required</sup> <a name="ipAddressType" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: string;
```

- *Type:* string

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.property.scheme"></a>

```typescript
public readonly scheme: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfig</a>

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList.Initializer"></a>

```typescript
import { networksecuritymanagerScope } from '@cdktn/provider-aws'

new networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList.get"></a>

```typescript
public get(index: number): NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteria">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteria</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteria[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteria">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteria</a>[]

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.Initializer"></a>

```typescript
import { networksecuritymanagerScope } from '@cdktn/provider-aws'

new networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.putAlbConfig">putAlbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.resetAlbConfig">resetAlbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAlbConfig` <a name="putAlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.putAlbConfig"></a>

```typescript
public putAlbConfig(value: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.putAlbConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfig</a>[]

---

##### `resetAlbConfig` <a name="resetAlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.resetAlbConfig"></a>

```typescript
public resetAlbConfig(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.property.albConfig">albConfig</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.property.albConfigInput">albConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteria">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteria</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `albConfig`<sup>Required</sup> <a name="albConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.property.albConfig"></a>

```typescript
public readonly albConfig: NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList;
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfigList</a>

---

##### `albConfigInput`<sup>Optional</sup> <a name="albConfigInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.property.albConfigInput"></a>

```typescript
public readonly albConfigInput: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaAlbConfig</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteria;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteria">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteria</a>

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList.Initializer"></a>

```typescript
import { networksecuritymanagerScope } from '@cdktn/provider-aws'

new networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList.get"></a>

```typescript
public get(index: number): NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression</a>[]

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList.Initializer"></a>

```typescript
import { networksecuritymanagerScope } from '@cdktn/provider-aws'

new networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList.get"></a>

```typescript
public get(index: number): NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfig</a>[]

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.Initializer"></a>

```typescript
import { networksecuritymanagerScope } from '@cdktn/provider-aws'

new networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.resetIpAddressType">resetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.resetScheme">resetScheme</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIpAddressType` <a name="resetIpAddressType" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.resetIpAddressType"></a>

```typescript
public resetIpAddressType(): void
```

##### `resetScheme` <a name="resetScheme" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.resetScheme"></a>

```typescript
public resetScheme(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.property.ipAddressTypeInput">ipAddressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.property.schemeInput">schemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.property.ipAddressType">ipAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.property.scheme">scheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipAddressTypeInput`<sup>Optional</sup> <a name="ipAddressTypeInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.property.ipAddressTypeInput"></a>

```typescript
public readonly ipAddressTypeInput: string;
```

- *Type:* string

---

##### `schemeInput`<sup>Optional</sup> <a name="schemeInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.property.schemeInput"></a>

```typescript
public readonly schemeInput: string;
```

- *Type:* string

---

##### `ipAddressType`<sup>Required</sup> <a name="ipAddressType" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: string;
```

- *Type:* string

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.property.scheme"></a>

```typescript
public readonly scheme: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfig</a>

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList.Initializer"></a>

```typescript
import { networksecuritymanagerScope } from '@cdktn/provider-aws'

new networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList.get"></a>

```typescript
public get(index: number): NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNot">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNot</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNot[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNot">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNot</a>[]

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.Initializer"></a>

```typescript
import { networksecuritymanagerScope } from '@cdktn/provider-aws'

new networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.putAlbConfig">putAlbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.resetAlbConfig">resetAlbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAlbConfig` <a name="putAlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.putAlbConfig"></a>

```typescript
public putAlbConfig(value: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.putAlbConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfig</a>[]

---

##### `resetAlbConfig` <a name="resetAlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.resetAlbConfig"></a>

```typescript
public resetAlbConfig(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.property.albConfig">albConfig</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.property.albConfigInput">albConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNot">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNot</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `albConfig`<sup>Required</sup> <a name="albConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.property.albConfig"></a>

```typescript
public readonly albConfig: NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList;
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfigList</a>

---

##### `albConfigInput`<sup>Optional</sup> <a name="albConfigInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.property.albConfigInput"></a>

```typescript
public readonly albConfigInput: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotAlbConfig</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNot;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNot">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNot</a>

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList.Initializer"></a>

```typescript
import { networksecuritymanagerScope } from '@cdktn/provider-aws'

new networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList.get"></a>

```typescript
public get(index: number): NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfig</a>[]

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.Initializer"></a>

```typescript
import { networksecuritymanagerScope } from '@cdktn/provider-aws'

new networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.resetIpAddressType">resetIpAddressType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.resetScheme">resetScheme</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIpAddressType` <a name="resetIpAddressType" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.resetIpAddressType"></a>

```typescript
public resetIpAddressType(): void
```

##### `resetScheme` <a name="resetScheme" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.resetScheme"></a>

```typescript
public resetScheme(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.property.ipAddressTypeInput">ipAddressTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.property.schemeInput">schemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.property.ipAddressType">ipAddressType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.property.scheme">scheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipAddressTypeInput`<sup>Optional</sup> <a name="ipAddressTypeInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.property.ipAddressTypeInput"></a>

```typescript
public readonly ipAddressTypeInput: string;
```

- *Type:* string

---

##### `schemeInput`<sup>Optional</sup> <a name="schemeInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.property.schemeInput"></a>

```typescript
public readonly schemeInput: string;
```

- *Type:* string

---

##### `ipAddressType`<sup>Required</sup> <a name="ipAddressType" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.property.ipAddressType"></a>

```typescript
public readonly ipAddressType: string;
```

- *Type:* string

---

##### `scheme`<sup>Required</sup> <a name="scheme" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.property.scheme"></a>

```typescript
public readonly scheme: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfig;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfig</a>

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList.Initializer"></a>

```typescript
import { networksecuritymanagerScope } from '@cdktn/provider-aws'

new networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList.get"></a>

```typescript
public get(index: number): NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOr">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOr</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOr[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOr">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOr</a>[]

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.Initializer"></a>

```typescript
import { networksecuritymanagerScope } from '@cdktn/provider-aws'

new networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.putAlbConfig">putAlbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.resetAlbConfig">resetAlbConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.resetTags">resetTags</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAlbConfig` <a name="putAlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.putAlbConfig"></a>

```typescript
public putAlbConfig(value: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.putAlbConfig.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfig</a>[]

---

##### `resetAlbConfig` <a name="resetAlbConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.resetAlbConfig"></a>

```typescript
public resetAlbConfig(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.resetTags"></a>

```typescript
public resetTags(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.property.albConfig">albConfig</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.property.albConfigInput">albConfigInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOr">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOr</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `albConfig`<sup>Required</sup> <a name="albConfig" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.property.albConfig"></a>

```typescript
public readonly albConfig: NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList;
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfigList</a>

---

##### `albConfigInput`<sup>Optional</sup> <a name="albConfigInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.property.albConfigInput"></a>

```typescript
public readonly albConfigInput: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfig[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfig">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrAlbConfig</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOr;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOr">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOr</a>

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.Initializer"></a>

```typescript
import { networksecuritymanagerScope } from '@cdktn/provider-aws'

new networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.putAnd">putAnd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.putCriteria">putCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.putNot">putNot</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.putOr">putOr</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.resetAnd">resetAnd</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.resetCriteria">resetCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.resetNot">resetNot</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.resetOr">resetOr</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAnd` <a name="putAnd" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.putAnd"></a>

```typescript
public putAnd(value: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAnd[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.putAnd.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAnd">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAnd</a>[]

---

##### `putCriteria` <a name="putCriteria" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.putCriteria"></a>

```typescript
public putCriteria(value: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteria[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.putCriteria.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteria">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteria</a>[]

---

##### `putNot` <a name="putNot" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.putNot"></a>

```typescript
public putNot(value: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNot[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.putNot.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNot">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNot</a>[]

---

##### `putOr` <a name="putOr" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.putOr"></a>

```typescript
public putOr(value: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOr[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.putOr.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOr">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOr</a>[]

---

##### `resetAnd` <a name="resetAnd" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.resetAnd"></a>

```typescript
public resetAnd(): void
```

##### `resetCriteria` <a name="resetCriteria" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.resetCriteria"></a>

```typescript
public resetCriteria(): void
```

##### `resetNot` <a name="resetNot" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.resetNot"></a>

```typescript
public resetNot(): void
```

##### `resetOr` <a name="resetOr" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.resetOr"></a>

```typescript
public resetOr(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.property.and">and</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.property.criteria">criteria</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.property.not">not</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.property.or">or</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.property.andInput">andInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAnd">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAnd</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.property.criteriaInput">criteriaInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteria">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteria</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.property.notInput">notInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNot">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNot</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.property.orInput">orInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOr">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOr</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `and`<sup>Required</sup> <a name="and" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.property.and"></a>

```typescript
public readonly and: NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList;
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAndList</a>

---

##### `criteria`<sup>Required</sup> <a name="criteria" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.property.criteria"></a>

```typescript
public readonly criteria: NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList;
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteriaList</a>

---

##### `not`<sup>Required</sup> <a name="not" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.property.not"></a>

```typescript
public readonly not: NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList;
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNotList</a>

---

##### `or`<sup>Required</sup> <a name="or" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.property.or"></a>

```typescript
public readonly or: NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList;
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOrList</a>

---

##### `andInput`<sup>Optional</sup> <a name="andInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.property.andInput"></a>

```typescript
public readonly andInput: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAnd[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAnd">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionAnd</a>[]

---

##### `criteriaInput`<sup>Optional</sup> <a name="criteriaInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.property.criteriaInput"></a>

```typescript
public readonly criteriaInput: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteria[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteria">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionCriteria</a>[]

---

##### `notInput`<sup>Optional</sup> <a name="notInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.property.notInput"></a>

```typescript
public readonly notInput: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNot[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNot">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionNot</a>[]

---

##### `orInput`<sup>Optional</sup> <a name="orInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.property.orInput"></a>

```typescript
public readonly orInput: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOr[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOr">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOr</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression</a>

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList.Initializer"></a>

```typescript
import { networksecuritymanagerScope } from '@cdktn/provider-aws'

new networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList.get"></a>

```typescript
public get(index: number): NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeInclude">NetworksecuritymanagerScopeScopeConfigurationResourceScopeInclude</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeInclude[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeInclude">NetworksecuritymanagerScopeScopeConfigurationResourceScopeInclude</a>[]

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.Initializer"></a>

```typescript
import { networksecuritymanagerScope } from '@cdktn/provider-aws'

new networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.putExpression">putExpression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.resetExplicitArns">resetExplicitArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.resetExpression">resetExpression</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExpression` <a name="putExpression" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.putExpression"></a>

```typescript
public putExpression(value: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.putExpression.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression</a>[]

---

##### `resetExplicitArns` <a name="resetExplicitArns" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.resetExplicitArns"></a>

```typescript
public resetExplicitArns(): void
```

##### `resetExpression` <a name="resetExpression" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.resetExpression"></a>

```typescript
public resetExpression(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.property.expression">expression</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.property.explicitArnsInput">explicitArnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.property.expressionInput">expressionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.property.explicitArns">explicitArns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeInclude">NetworksecuritymanagerScopeScopeConfigurationResourceScopeInclude</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.property.expression"></a>

```typescript
public readonly expression: NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList;
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpressionList</a>

---

##### `explicitArnsInput`<sup>Optional</sup> <a name="explicitArnsInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.property.explicitArnsInput"></a>

```typescript
public readonly explicitArnsInput: string[];
```

- *Type:* string[]

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeExpression</a>[]

---

##### `explicitArns`<sup>Required</sup> <a name="explicitArns" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.property.explicitArns"></a>

```typescript
public readonly explicitArns: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeInclude;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeInclude">NetworksecuritymanagerScopeScopeConfigurationResourceScopeInclude</a>

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeList <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeList" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList.Initializer"></a>

```typescript
import { networksecuritymanagerScope } from '@cdktn/provider-aws'

new networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList.get"></a>

```typescript
public get(index: number): NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScope">NetworksecuritymanagerScopeScopeConfigurationResourceScope</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScope[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScope">NetworksecuritymanagerScopeScopeConfigurationResourceScope</a>[]

---


### NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference <a name="NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.Initializer"></a>

```typescript
import { networksecuritymanagerScope } from '@cdktn/provider-aws'

new networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.putExclude">putExclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.putInclude">putInclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.resetExclude">resetExclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.resetInclude">resetInclude</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.resetIncludeAll">resetIncludeAll</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExclude` <a name="putExclude" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.putExclude"></a>

```typescript
public putExclude(value: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeExclude[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.putExclude.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExclude">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExclude</a>[]

---

##### `putInclude` <a name="putInclude" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.putInclude"></a>

```typescript
public putInclude(value: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeInclude[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.putInclude.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeInclude">NetworksecuritymanagerScopeScopeConfigurationResourceScopeInclude</a>[]

---

##### `resetExclude` <a name="resetExclude" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.resetExclude"></a>

```typescript
public resetExclude(): void
```

##### `resetInclude` <a name="resetInclude" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.resetInclude"></a>

```typescript
public resetInclude(): void
```

##### `resetIncludeAll` <a name="resetIncludeAll" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.resetIncludeAll"></a>

```typescript
public resetIncludeAll(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.property.exclude">exclude</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.property.include">include</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.property.excludeInput">excludeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExclude">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExclude</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.property.includeAllInput">includeAllInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.property.includeInput">includeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeInclude">NetworksecuritymanagerScopeScopeConfigurationResourceScopeInclude</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.property.resourceTypeInput">resourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.property.includeAll">includeAll</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.property.resourceType">resourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScope">NetworksecuritymanagerScopeScopeConfigurationResourceScope</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `exclude`<sup>Required</sup> <a name="exclude" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.property.exclude"></a>

```typescript
public readonly exclude: NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList;
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExcludeList</a>

---

##### `include`<sup>Required</sup> <a name="include" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.property.include"></a>

```typescript
public readonly include: NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList;
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList">NetworksecuritymanagerScopeScopeConfigurationResourceScopeIncludeList</a>

---

##### `excludeInput`<sup>Optional</sup> <a name="excludeInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.property.excludeInput"></a>

```typescript
public readonly excludeInput: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeExclude[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeExclude">NetworksecuritymanagerScopeScopeConfigurationResourceScopeExclude</a>[]

---

##### `includeAllInput`<sup>Optional</sup> <a name="includeAllInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.property.includeAllInput"></a>

```typescript
public readonly includeAllInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `includeInput`<sup>Optional</sup> <a name="includeInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.property.includeInput"></a>

```typescript
public readonly includeInput: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScopeInclude[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeInclude">NetworksecuritymanagerScopeScopeConfigurationResourceScopeInclude</a>[]

---

##### `resourceTypeInput`<sup>Optional</sup> <a name="resourceTypeInput" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.property.resourceTypeInput"></a>

```typescript
public readonly resourceTypeInput: string;
```

- *Type:* string

---

##### `includeAll`<sup>Required</sup> <a name="includeAll" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.property.includeAll"></a>

```typescript
public readonly includeAll: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `resourceType`<sup>Required</sup> <a name="resourceType" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.property.resourceType"></a>

```typescript
public readonly resourceType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScopeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworksecuritymanagerScopeScopeConfigurationResourceScope;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerScope.NetworksecuritymanagerScopeScopeConfigurationResourceScope">NetworksecuritymanagerScopeScopeConfigurationResourceScope</a>

---



