# `directoryServiceIpRoutesExclusive` Submodule <a name="`directoryServiceIpRoutesExclusive` Submodule" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DirectoryServiceIpRoutesExclusive <a name="DirectoryServiceIpRoutesExclusive" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/resources/directory_service_ip_routes_exclusive aws_directory_service_ip_routes_exclusive}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.Initializer"></a>

```typescript
import { directoryServiceIpRoutesExclusive } from '@cdktn/provider-aws'

new directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive(scope: Construct, id: string, config: DirectoryServiceIpRoutesExclusiveConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig">DirectoryServiceIpRoutesExclusiveConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig">DirectoryServiceIpRoutesExclusiveConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.putIpRoute">putIpRoute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.resetIpRoute">resetIpRoute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.resetUpdateSecurityGroupForDirectoryControllers">resetUpdateSecurityGroupForDirectoryControllers</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIpRoute` <a name="putIpRoute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.putIpRoute"></a>

```typescript
public putIpRoute(value: IResolvable | DirectoryServiceIpRoutesExclusiveIpRoute[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.putIpRoute.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRoute">DirectoryServiceIpRoutesExclusiveIpRoute</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.putTimeouts"></a>

```typescript
public putTimeouts(value: DirectoryServiceIpRoutesExclusiveTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeouts">DirectoryServiceIpRoutesExclusiveTimeouts</a>

---

##### `resetIpRoute` <a name="resetIpRoute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.resetIpRoute"></a>

```typescript
public resetIpRoute(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUpdateSecurityGroupForDirectoryControllers` <a name="resetUpdateSecurityGroupForDirectoryControllers" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.resetUpdateSecurityGroupForDirectoryControllers"></a>

```typescript
public resetUpdateSecurityGroupForDirectoryControllers(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DirectoryServiceIpRoutesExclusive resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.isConstruct"></a>

```typescript
import { directoryServiceIpRoutesExclusive } from '@cdktn/provider-aws'

directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.isTerraformElement"></a>

```typescript
import { directoryServiceIpRoutesExclusive } from '@cdktn/provider-aws'

directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.isTerraformResource"></a>

```typescript
import { directoryServiceIpRoutesExclusive } from '@cdktn/provider-aws'

directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.generateConfigForImport"></a>

```typescript
import { directoryServiceIpRoutesExclusive } from '@cdktn/provider-aws'

directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DirectoryServiceIpRoutesExclusive resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DirectoryServiceIpRoutesExclusive to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DirectoryServiceIpRoutesExclusive that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/resources/directory_service_ip_routes_exclusive#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DirectoryServiceIpRoutesExclusive to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.ipRoute">ipRoute</a></code> | <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList">DirectoryServiceIpRoutesExclusiveIpRouteList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference">DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.directoryIdInput">directoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.ipRouteInput">ipRouteInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRoute">DirectoryServiceIpRoutesExclusiveIpRoute</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeouts">DirectoryServiceIpRoutesExclusiveTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.updateSecurityGroupForDirectoryControllersInput">updateSecurityGroupForDirectoryControllersInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.directoryId">directoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.updateSecurityGroupForDirectoryControllers">updateSecurityGroupForDirectoryControllers</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `ipRoute`<sup>Required</sup> <a name="ipRoute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.ipRoute"></a>

```typescript
public readonly ipRoute: DirectoryServiceIpRoutesExclusiveIpRouteList;
```

- *Type:* <a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList">DirectoryServiceIpRoutesExclusiveIpRouteList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.timeouts"></a>

```typescript
public readonly timeouts: DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference">DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference</a>

---

##### `directoryIdInput`<sup>Optional</sup> <a name="directoryIdInput" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.directoryIdInput"></a>

```typescript
public readonly directoryIdInput: string;
```

- *Type:* string

---

##### `ipRouteInput`<sup>Optional</sup> <a name="ipRouteInput" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.ipRouteInput"></a>

```typescript
public readonly ipRouteInput: IResolvable | DirectoryServiceIpRoutesExclusiveIpRoute[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRoute">DirectoryServiceIpRoutesExclusiveIpRoute</a>[]

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DirectoryServiceIpRoutesExclusiveTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeouts">DirectoryServiceIpRoutesExclusiveTimeouts</a>

---

##### `updateSecurityGroupForDirectoryControllersInput`<sup>Optional</sup> <a name="updateSecurityGroupForDirectoryControllersInput" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.updateSecurityGroupForDirectoryControllersInput"></a>

```typescript
public readonly updateSecurityGroupForDirectoryControllersInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.directoryId"></a>

```typescript
public readonly directoryId: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `updateSecurityGroupForDirectoryControllers`<sup>Required</sup> <a name="updateSecurityGroupForDirectoryControllers" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.updateSecurityGroupForDirectoryControllers"></a>

```typescript
public readonly updateSecurityGroupForDirectoryControllers: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusive.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DirectoryServiceIpRoutesExclusiveConfig <a name="DirectoryServiceIpRoutesExclusiveConfig" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.Initializer"></a>

```typescript
import { directoryServiceIpRoutesExclusive } from '@cdktn/provider-aws'

const directoryServiceIpRoutesExclusiveConfig: directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.directoryId">directoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/resources/directory_service_ip_routes_exclusive#directory_id DirectoryServiceIpRoutesExclusive#directory_id}. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.ipRoute">ipRoute</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRoute">DirectoryServiceIpRoutesExclusiveIpRoute</a>[]</code> | ip_route block. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeouts">DirectoryServiceIpRoutesExclusiveTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.updateSecurityGroupForDirectoryControllers">updateSecurityGroupForDirectoryControllers</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/resources/directory_service_ip_routes_exclusive#update_security_group_for_directory_controllers DirectoryServiceIpRoutesExclusive#update_security_group_for_directory_controllers}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.directoryId"></a>

```typescript
public readonly directoryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/resources/directory_service_ip_routes_exclusive#directory_id DirectoryServiceIpRoutesExclusive#directory_id}.

---

##### `ipRoute`<sup>Optional</sup> <a name="ipRoute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.ipRoute"></a>

```typescript
public readonly ipRoute: IResolvable | DirectoryServiceIpRoutesExclusiveIpRoute[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRoute">DirectoryServiceIpRoutesExclusiveIpRoute</a>[]

ip_route block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/resources/directory_service_ip_routes_exclusive#ip_route DirectoryServiceIpRoutesExclusive#ip_route}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/resources/directory_service_ip_routes_exclusive#region DirectoryServiceIpRoutesExclusive#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DirectoryServiceIpRoutesExclusiveTimeouts;
```

- *Type:* <a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeouts">DirectoryServiceIpRoutesExclusiveTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/resources/directory_service_ip_routes_exclusive#timeouts DirectoryServiceIpRoutesExclusive#timeouts}

---

##### `updateSecurityGroupForDirectoryControllers`<sup>Optional</sup> <a name="updateSecurityGroupForDirectoryControllers" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveConfig.property.updateSecurityGroupForDirectoryControllers"></a>

```typescript
public readonly updateSecurityGroupForDirectoryControllers: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/resources/directory_service_ip_routes_exclusive#update_security_group_for_directory_controllers DirectoryServiceIpRoutesExclusive#update_security_group_for_directory_controllers}.

---

### DirectoryServiceIpRoutesExclusiveIpRoute <a name="DirectoryServiceIpRoutesExclusiveIpRoute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRoute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRoute.Initializer"></a>

```typescript
import { directoryServiceIpRoutesExclusive } from '@cdktn/provider-aws'

const directoryServiceIpRoutesExclusiveIpRoute: directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRoute = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRoute.property.cidrIp">cidrIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/resources/directory_service_ip_routes_exclusive#cidr_ip DirectoryServiceIpRoutesExclusive#cidr_ip}. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRoute.property.cidrIpv6">cidrIpv6</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/resources/directory_service_ip_routes_exclusive#cidr_ipv6 DirectoryServiceIpRoutesExclusive#cidr_ipv6}. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRoute.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/resources/directory_service_ip_routes_exclusive#description DirectoryServiceIpRoutesExclusive#description}. |

---

##### `cidrIp`<sup>Optional</sup> <a name="cidrIp" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRoute.property.cidrIp"></a>

```typescript
public readonly cidrIp: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/resources/directory_service_ip_routes_exclusive#cidr_ip DirectoryServiceIpRoutesExclusive#cidr_ip}.

---

##### `cidrIpv6`<sup>Optional</sup> <a name="cidrIpv6" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRoute.property.cidrIpv6"></a>

```typescript
public readonly cidrIpv6: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/resources/directory_service_ip_routes_exclusive#cidr_ipv6 DirectoryServiceIpRoutesExclusive#cidr_ipv6}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRoute.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/resources/directory_service_ip_routes_exclusive#description DirectoryServiceIpRoutesExclusive#description}.

---

### DirectoryServiceIpRoutesExclusiveTimeouts <a name="DirectoryServiceIpRoutesExclusiveTimeouts" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeouts.Initializer"></a>

```typescript
import { directoryServiceIpRoutesExclusive } from '@cdktn/provider-aws'

const directoryServiceIpRoutesExclusiveTimeouts: directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeouts.property.update">update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/resources/directory_service_ip_routes_exclusive#create DirectoryServiceIpRoutesExclusive#create}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.1/docs/resources/directory_service_ip_routes_exclusive#update DirectoryServiceIpRoutesExclusive#update}

---

## Classes <a name="Classes" id="Classes"></a>

### DirectoryServiceIpRoutesExclusiveIpRouteList <a name="DirectoryServiceIpRoutesExclusiveIpRouteList" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.Initializer"></a>

```typescript
import { directoryServiceIpRoutesExclusive } from '@cdktn/provider-aws'

new directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.get"></a>

```typescript
public get(index: number): DirectoryServiceIpRoutesExclusiveIpRouteOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRoute">DirectoryServiceIpRoutesExclusiveIpRoute</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DirectoryServiceIpRoutesExclusiveIpRoute[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRoute">DirectoryServiceIpRoutesExclusiveIpRoute</a>[]

---


### DirectoryServiceIpRoutesExclusiveIpRouteOutputReference <a name="DirectoryServiceIpRoutesExclusiveIpRouteOutputReference" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.Initializer"></a>

```typescript
import { directoryServiceIpRoutesExclusive } from '@cdktn/provider-aws'

new directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.resetCidrIp">resetCidrIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.resetCidrIpv6">resetCidrIpv6</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCidrIp` <a name="resetCidrIp" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.resetCidrIp"></a>

```typescript
public resetCidrIp(): void
```

##### `resetCidrIpv6` <a name="resetCidrIpv6" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.resetCidrIpv6"></a>

```typescript
public resetCidrIpv6(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.resetDescription"></a>

```typescript
public resetDescription(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.cidrIpInput">cidrIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.cidrIpv6Input">cidrIpv6Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.cidrIp">cidrIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.cidrIpv6">cidrIpv6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRoute">DirectoryServiceIpRoutesExclusiveIpRoute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidrIpInput`<sup>Optional</sup> <a name="cidrIpInput" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.cidrIpInput"></a>

```typescript
public readonly cidrIpInput: string;
```

- *Type:* string

---

##### `cidrIpv6Input`<sup>Optional</sup> <a name="cidrIpv6Input" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.cidrIpv6Input"></a>

```typescript
public readonly cidrIpv6Input: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `cidrIp`<sup>Required</sup> <a name="cidrIp" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.cidrIp"></a>

```typescript
public readonly cidrIp: string;
```

- *Type:* string

---

##### `cidrIpv6`<sup>Required</sup> <a name="cidrIpv6" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.cidrIpv6"></a>

```typescript
public readonly cidrIpv6: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRouteOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DirectoryServiceIpRoutesExclusiveIpRoute;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveIpRoute">DirectoryServiceIpRoutesExclusiveIpRoute</a>

---


### DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference <a name="DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.Initializer"></a>

```typescript
import { directoryServiceIpRoutesExclusive } from '@cdktn/provider-aws'

new directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeouts">DirectoryServiceIpRoutesExclusiveTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DirectoryServiceIpRoutesExclusiveTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.directoryServiceIpRoutesExclusive.DirectoryServiceIpRoutesExclusiveTimeouts">DirectoryServiceIpRoutesExclusiveTimeouts</a>

---



