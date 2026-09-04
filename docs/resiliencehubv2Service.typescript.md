# `resiliencehubv2Service` Submodule <a name="`resiliencehubv2Service` Submodule" id="@cdktn/provider-aws.resiliencehubv2Service"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Resiliencehubv2Service <a name="Resiliencehubv2Service" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_service aws_resiliencehubv2_service}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.Initializer"></a>

```typescript
import { resiliencehubv2Service } from '@cdktn/provider-aws'

new resiliencehubv2Service.Resiliencehubv2Service(scope: Construct, id: string, config: Resiliencehubv2ServiceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig">Resiliencehubv2ServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig">Resiliencehubv2ServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.putAssociatedSystem">putAssociatedSystem</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.putPermissionModel">putPermissionModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.resetAssociatedSystem">resetAssociatedSystem</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.resetDependencyDiscovery">resetDependencyDiscovery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.resetPermissionModel">resetPermissionModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.resetPolicyArn">resetPolicyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAssociatedSystem` <a name="putAssociatedSystem" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.putAssociatedSystem"></a>

```typescript
public putAssociatedSystem(value: IResolvable | Resiliencehubv2ServiceAssociatedSystem[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.putAssociatedSystem.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystem">Resiliencehubv2ServiceAssociatedSystem</a>[]

---

##### `putPermissionModel` <a name="putPermissionModel" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.putPermissionModel"></a>

```typescript
public putPermissionModel(value: IResolvable | Resiliencehubv2ServicePermissionModel[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.putPermissionModel.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel">Resiliencehubv2ServicePermissionModel</a>[]

---

##### `resetAssociatedSystem` <a name="resetAssociatedSystem" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.resetAssociatedSystem"></a>

```typescript
public resetAssociatedSystem(): void
```

##### `resetDependencyDiscovery` <a name="resetDependencyDiscovery" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.resetDependencyDiscovery"></a>

```typescript
public resetDependencyDiscovery(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.resetKmsKeyId"></a>

```typescript
public resetKmsKeyId(): void
```

##### `resetPermissionModel` <a name="resetPermissionModel" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.resetPermissionModel"></a>

```typescript
public resetPermissionModel(): void
```

##### `resetPolicyArn` <a name="resetPolicyArn" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.resetPolicyArn"></a>

```typescript
public resetPolicyArn(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Resiliencehubv2Service resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.isConstruct"></a>

```typescript
import { resiliencehubv2Service } from '@cdktn/provider-aws'

resiliencehubv2Service.Resiliencehubv2Service.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.isTerraformElement"></a>

```typescript
import { resiliencehubv2Service } from '@cdktn/provider-aws'

resiliencehubv2Service.Resiliencehubv2Service.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.isTerraformResource"></a>

```typescript
import { resiliencehubv2Service } from '@cdktn/provider-aws'

resiliencehubv2Service.Resiliencehubv2Service.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.generateConfigForImport"></a>

```typescript
import { resiliencehubv2Service } from '@cdktn/provider-aws'

resiliencehubv2Service.Resiliencehubv2Service.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Resiliencehubv2Service resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Resiliencehubv2Service to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Resiliencehubv2Service that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Resiliencehubv2Service to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.associatedSystem">associatedSystem</a></code> | <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemList">Resiliencehubv2ServiceAssociatedSystemList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.permissionModel">permissionModel</a></code> | <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList">Resiliencehubv2ServicePermissionModelList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.tagsAll">tagsAll</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.associatedSystemInput">associatedSystemInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystem">Resiliencehubv2ServiceAssociatedSystem</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.dependencyDiscoveryInput">dependencyDiscoveryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.permissionModelInput">permissionModelInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel">Resiliencehubv2ServicePermissionModel</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.policyArnInput">policyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.regionsInput">regionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.dependencyDiscovery">dependencyDiscovery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.policyArn">policyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.regions">regions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `associatedSystem`<sup>Required</sup> <a name="associatedSystem" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.associatedSystem"></a>

```typescript
public readonly associatedSystem: Resiliencehubv2ServiceAssociatedSystemList;
```

- *Type:* <a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemList">Resiliencehubv2ServiceAssociatedSystemList</a>

---

##### `permissionModel`<sup>Required</sup> <a name="permissionModel" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.permissionModel"></a>

```typescript
public readonly permissionModel: Resiliencehubv2ServicePermissionModelList;
```

- *Type:* <a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList">Resiliencehubv2ServicePermissionModelList</a>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `associatedSystemInput`<sup>Optional</sup> <a name="associatedSystemInput" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.associatedSystemInput"></a>

```typescript
public readonly associatedSystemInput: IResolvable | Resiliencehubv2ServiceAssociatedSystem[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystem">Resiliencehubv2ServiceAssociatedSystem</a>[]

---

##### `dependencyDiscoveryInput`<sup>Optional</sup> <a name="dependencyDiscoveryInput" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.dependencyDiscoveryInput"></a>

```typescript
public readonly dependencyDiscoveryInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.kmsKeyIdInput"></a>

```typescript
public readonly kmsKeyIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `permissionModelInput`<sup>Optional</sup> <a name="permissionModelInput" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.permissionModelInput"></a>

```typescript
public readonly permissionModelInput: IResolvable | Resiliencehubv2ServicePermissionModel[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel">Resiliencehubv2ServicePermissionModel</a>[]

---

##### `policyArnInput`<sup>Optional</sup> <a name="policyArnInput" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.policyArnInput"></a>

```typescript
public readonly policyArnInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `regionsInput`<sup>Optional</sup> <a name="regionsInput" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.regionsInput"></a>

```typescript
public readonly regionsInput: string[];
```

- *Type:* string[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `dependencyDiscovery`<sup>Required</sup> <a name="dependencyDiscovery" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.dependencyDiscovery"></a>

```typescript
public readonly dependencyDiscovery: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `policyArn`<sup>Required</sup> <a name="policyArn" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.policyArn"></a>

```typescript
public readonly policyArn: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.regions"></a>

```typescript
public readonly regions: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2Service.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Resiliencehubv2ServiceAssociatedSystem <a name="Resiliencehubv2ServiceAssociatedSystem" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystem"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystem.Initializer"></a>

```typescript
import { resiliencehubv2Service } from '@cdktn/provider-aws'

const resiliencehubv2ServiceAssociatedSystem: resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystem = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystem.property.systemArn">systemArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_service#system_arn Resiliencehubv2Service#system_arn}. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystem.property.userJourneyIds">userJourneyIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_service#user_journey_ids Resiliencehubv2Service#user_journey_ids}. |

---

##### `systemArn`<sup>Required</sup> <a name="systemArn" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystem.property.systemArn"></a>

```typescript
public readonly systemArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_service#system_arn Resiliencehubv2Service#system_arn}.

---

##### `userJourneyIds`<sup>Optional</sup> <a name="userJourneyIds" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystem.property.userJourneyIds"></a>

```typescript
public readonly userJourneyIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_service#user_journey_ids Resiliencehubv2Service#user_journey_ids}.

---

### Resiliencehubv2ServiceConfig <a name="Resiliencehubv2ServiceConfig" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.Initializer"></a>

```typescript
import { resiliencehubv2Service } from '@cdktn/provider-aws'

const resiliencehubv2ServiceConfig: resiliencehubv2Service.Resiliencehubv2ServiceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_service#name Resiliencehubv2Service#name}. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.regions">regions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_service#regions Resiliencehubv2Service#regions}. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.associatedSystem">associatedSystem</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystem">Resiliencehubv2ServiceAssociatedSystem</a>[]</code> | associated_system block. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.dependencyDiscovery">dependencyDiscovery</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_service#dependency_discovery Resiliencehubv2Service#dependency_discovery}. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_service#description Resiliencehubv2Service#description}. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_service#kms_key_id Resiliencehubv2Service#kms_key_id}. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.permissionModel">permissionModel</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel">Resiliencehubv2ServicePermissionModel</a>[]</code> | permission_model block. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.policyArn">policyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_service#policy_arn Resiliencehubv2Service#policy_arn}. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_service#tags Resiliencehubv2Service#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_service#name Resiliencehubv2Service#name}.

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.regions"></a>

```typescript
public readonly regions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_service#regions Resiliencehubv2Service#regions}.

---

##### `associatedSystem`<sup>Optional</sup> <a name="associatedSystem" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.associatedSystem"></a>

```typescript
public readonly associatedSystem: IResolvable | Resiliencehubv2ServiceAssociatedSystem[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystem">Resiliencehubv2ServiceAssociatedSystem</a>[]

associated_system block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_service#associated_system Resiliencehubv2Service#associated_system}

---

##### `dependencyDiscovery`<sup>Optional</sup> <a name="dependencyDiscovery" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.dependencyDiscovery"></a>

```typescript
public readonly dependencyDiscovery: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_service#dependency_discovery Resiliencehubv2Service#dependency_discovery}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_service#description Resiliencehubv2Service#description}.

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_service#kms_key_id Resiliencehubv2Service#kms_key_id}.

---

##### `permissionModel`<sup>Optional</sup> <a name="permissionModel" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.permissionModel"></a>

```typescript
public readonly permissionModel: IResolvable | Resiliencehubv2ServicePermissionModel[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel">Resiliencehubv2ServicePermissionModel</a>[]

permission_model block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_service#permission_model Resiliencehubv2Service#permission_model}

---

##### `policyArn`<sup>Optional</sup> <a name="policyArn" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.policyArn"></a>

```typescript
public readonly policyArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_service#policy_arn Resiliencehubv2Service#policy_arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_service#region Resiliencehubv2Service#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_service#tags Resiliencehubv2Service#tags}.

---

### Resiliencehubv2ServicePermissionModel <a name="Resiliencehubv2ServicePermissionModel" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel.Initializer"></a>

```typescript
import { resiliencehubv2Service } from '@cdktn/provider-aws'

const resiliencehubv2ServicePermissionModel: resiliencehubv2Service.Resiliencehubv2ServicePermissionModel = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel.property.invokerRoleName">invokerRoleName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_service#invoker_role_name Resiliencehubv2Service#invoker_role_name}. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel.property.crossAccountRole">crossAccountRole</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRole">Resiliencehubv2ServicePermissionModelCrossAccountRole</a>[]</code> | cross_account_role block. |

---

##### `invokerRoleName`<sup>Required</sup> <a name="invokerRoleName" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel.property.invokerRoleName"></a>

```typescript
public readonly invokerRoleName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_service#invoker_role_name Resiliencehubv2Service#invoker_role_name}.

---

##### `crossAccountRole`<sup>Optional</sup> <a name="crossAccountRole" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel.property.crossAccountRole"></a>

```typescript
public readonly crossAccountRole: IResolvable | Resiliencehubv2ServicePermissionModelCrossAccountRole[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRole">Resiliencehubv2ServicePermissionModelCrossAccountRole</a>[]

cross_account_role block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_service#cross_account_role Resiliencehubv2Service#cross_account_role}

---

### Resiliencehubv2ServicePermissionModelCrossAccountRole <a name="Resiliencehubv2ServicePermissionModelCrossAccountRole" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRole"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRole.Initializer"></a>

```typescript
import { resiliencehubv2Service } from '@cdktn/provider-aws'

const resiliencehubv2ServicePermissionModelCrossAccountRole: resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRole = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRole.property.crossAccountRoleArn">crossAccountRoleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_service#cross_account_role_arn Resiliencehubv2Service#cross_account_role_arn}. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRole.property.externalId">externalId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_service#external_id Resiliencehubv2Service#external_id}. |

---

##### `crossAccountRoleArn`<sup>Required</sup> <a name="crossAccountRoleArn" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRole.property.crossAccountRoleArn"></a>

```typescript
public readonly crossAccountRoleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_service#cross_account_role_arn Resiliencehubv2Service#cross_account_role_arn}.

---

##### `externalId`<sup>Optional</sup> <a name="externalId" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRole.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/resiliencehubv2_service#external_id Resiliencehubv2Service#external_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### Resiliencehubv2ServiceAssociatedSystemList <a name="Resiliencehubv2ServiceAssociatedSystemList" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemList.Initializer"></a>

```typescript
import { resiliencehubv2Service } from '@cdktn/provider-aws'

new resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemList.get"></a>

```typescript
public get(index: number): Resiliencehubv2ServiceAssociatedSystemOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystem">Resiliencehubv2ServiceAssociatedSystem</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Resiliencehubv2ServiceAssociatedSystem[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystem">Resiliencehubv2ServiceAssociatedSystem</a>[]

---


### Resiliencehubv2ServiceAssociatedSystemOutputReference <a name="Resiliencehubv2ServiceAssociatedSystemOutputReference" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.Initializer"></a>

```typescript
import { resiliencehubv2Service } from '@cdktn/provider-aws'

new resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.resetUserJourneyIds">resetUserJourneyIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUserJourneyIds` <a name="resetUserJourneyIds" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.resetUserJourneyIds"></a>

```typescript
public resetUserJourneyIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.property.systemArnInput">systemArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.property.userJourneyIdsInput">userJourneyIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.property.systemArn">systemArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.property.userJourneyIds">userJourneyIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystem">Resiliencehubv2ServiceAssociatedSystem</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `systemArnInput`<sup>Optional</sup> <a name="systemArnInput" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.property.systemArnInput"></a>

```typescript
public readonly systemArnInput: string;
```

- *Type:* string

---

##### `userJourneyIdsInput`<sup>Optional</sup> <a name="userJourneyIdsInput" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.property.userJourneyIdsInput"></a>

```typescript
public readonly userJourneyIdsInput: string[];
```

- *Type:* string[]

---

##### `systemArn`<sup>Required</sup> <a name="systemArn" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.property.systemArn"></a>

```typescript
public readonly systemArn: string;
```

- *Type:* string

---

##### `userJourneyIds`<sup>Required</sup> <a name="userJourneyIds" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.property.userJourneyIds"></a>

```typescript
public readonly userJourneyIds: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystemOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Resiliencehubv2ServiceAssociatedSystem;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServiceAssociatedSystem">Resiliencehubv2ServiceAssociatedSystem</a>

---


### Resiliencehubv2ServicePermissionModelCrossAccountRoleList <a name="Resiliencehubv2ServicePermissionModelCrossAccountRoleList" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList.Initializer"></a>

```typescript
import { resiliencehubv2Service } from '@cdktn/provider-aws'

new resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList.get"></a>

```typescript
public get(index: number): Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRole">Resiliencehubv2ServicePermissionModelCrossAccountRole</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Resiliencehubv2ServicePermissionModelCrossAccountRole[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRole">Resiliencehubv2ServicePermissionModelCrossAccountRole</a>[]

---


### Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference <a name="Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.Initializer"></a>

```typescript
import { resiliencehubv2Service } from '@cdktn/provider-aws'

new resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.resetExternalId">resetExternalId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExternalId` <a name="resetExternalId" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.resetExternalId"></a>

```typescript
public resetExternalId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.property.crossAccountRoleArnInput">crossAccountRoleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.property.externalIdInput">externalIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.property.crossAccountRoleArn">crossAccountRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.property.externalId">externalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRole">Resiliencehubv2ServicePermissionModelCrossAccountRole</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `crossAccountRoleArnInput`<sup>Optional</sup> <a name="crossAccountRoleArnInput" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.property.crossAccountRoleArnInput"></a>

```typescript
public readonly crossAccountRoleArnInput: string;
```

- *Type:* string

---

##### `externalIdInput`<sup>Optional</sup> <a name="externalIdInput" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.property.externalIdInput"></a>

```typescript
public readonly externalIdInput: string;
```

- *Type:* string

---

##### `crossAccountRoleArn`<sup>Required</sup> <a name="crossAccountRoleArn" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.property.crossAccountRoleArn"></a>

```typescript
public readonly crossAccountRoleArn: string;
```

- *Type:* string

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Resiliencehubv2ServicePermissionModelCrossAccountRole;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRole">Resiliencehubv2ServicePermissionModelCrossAccountRole</a>

---


### Resiliencehubv2ServicePermissionModelList <a name="Resiliencehubv2ServicePermissionModelList" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList.Initializer"></a>

```typescript
import { resiliencehubv2Service } from '@cdktn/provider-aws'

new resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList.get"></a>

```typescript
public get(index: number): Resiliencehubv2ServicePermissionModelOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel">Resiliencehubv2ServicePermissionModel</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Resiliencehubv2ServicePermissionModel[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel">Resiliencehubv2ServicePermissionModel</a>[]

---


### Resiliencehubv2ServicePermissionModelOutputReference <a name="Resiliencehubv2ServicePermissionModelOutputReference" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.Initializer"></a>

```typescript
import { resiliencehubv2Service } from '@cdktn/provider-aws'

new resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.putCrossAccountRole">putCrossAccountRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.resetCrossAccountRole">resetCrossAccountRole</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCrossAccountRole` <a name="putCrossAccountRole" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.putCrossAccountRole"></a>

```typescript
public putCrossAccountRole(value: IResolvable | Resiliencehubv2ServicePermissionModelCrossAccountRole[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.putCrossAccountRole.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRole">Resiliencehubv2ServicePermissionModelCrossAccountRole</a>[]

---

##### `resetCrossAccountRole` <a name="resetCrossAccountRole" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.resetCrossAccountRole"></a>

```typescript
public resetCrossAccountRole(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.crossAccountRole">crossAccountRole</a></code> | <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList">Resiliencehubv2ServicePermissionModelCrossAccountRoleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.crossAccountRoleInput">crossAccountRoleInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRole">Resiliencehubv2ServicePermissionModelCrossAccountRole</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.invokerRoleNameInput">invokerRoleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.invokerRoleName">invokerRoleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel">Resiliencehubv2ServicePermissionModel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `crossAccountRole`<sup>Required</sup> <a name="crossAccountRole" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.crossAccountRole"></a>

```typescript
public readonly crossAccountRole: Resiliencehubv2ServicePermissionModelCrossAccountRoleList;
```

- *Type:* <a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRoleList">Resiliencehubv2ServicePermissionModelCrossAccountRoleList</a>

---

##### `crossAccountRoleInput`<sup>Optional</sup> <a name="crossAccountRoleInput" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.crossAccountRoleInput"></a>

```typescript
public readonly crossAccountRoleInput: IResolvable | Resiliencehubv2ServicePermissionModelCrossAccountRole[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelCrossAccountRole">Resiliencehubv2ServicePermissionModelCrossAccountRole</a>[]

---

##### `invokerRoleNameInput`<sup>Optional</sup> <a name="invokerRoleNameInput" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.invokerRoleNameInput"></a>

```typescript
public readonly invokerRoleNameInput: string;
```

- *Type:* string

---

##### `invokerRoleName`<sup>Required</sup> <a name="invokerRoleName" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.invokerRoleName"></a>

```typescript
public readonly invokerRoleName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModelOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Resiliencehubv2ServicePermissionModel;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.resiliencehubv2Service.Resiliencehubv2ServicePermissionModel">Resiliencehubv2ServicePermissionModel</a>

---



