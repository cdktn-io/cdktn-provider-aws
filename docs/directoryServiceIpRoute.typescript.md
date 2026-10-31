# `directoryServiceIpRoute` Submodule <a name="`directoryServiceIpRoute` Submodule" id="@cdktn/provider-aws.directoryServiceIpRoute"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DirectoryServiceIpRoute <a name="DirectoryServiceIpRoute" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/directory_service_ip_route aws_directory_service_ip_route}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.Initializer"></a>

```typescript
import { directoryServiceIpRoute } from '@cdktn/provider-aws'

new directoryServiceIpRoute.DirectoryServiceIpRoute(scope: Construct, id: string, config: DirectoryServiceIpRouteConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteConfig">DirectoryServiceIpRouteConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteConfig">DirectoryServiceIpRouteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.resetCidrIp">resetCidrIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.resetCidrIpv6">resetCidrIpv6</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.resetUpdateSecurityGroupForDirectoryControllers">resetUpdateSecurityGroupForDirectoryControllers</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.putTimeouts"></a>

```typescript
public putTimeouts(value: DirectoryServiceIpRouteTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteTimeouts">DirectoryServiceIpRouteTimeouts</a>

---

##### `resetCidrIp` <a name="resetCidrIp" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.resetCidrIp"></a>

```typescript
public resetCidrIp(): void
```

##### `resetCidrIpv6` <a name="resetCidrIpv6" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.resetCidrIpv6"></a>

```typescript
public resetCidrIpv6(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetUpdateSecurityGroupForDirectoryControllers` <a name="resetUpdateSecurityGroupForDirectoryControllers" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.resetUpdateSecurityGroupForDirectoryControllers"></a>

```typescript
public resetUpdateSecurityGroupForDirectoryControllers(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DirectoryServiceIpRoute resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.isConstruct"></a>

```typescript
import { directoryServiceIpRoute } from '@cdktn/provider-aws'

directoryServiceIpRoute.DirectoryServiceIpRoute.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.isTerraformElement"></a>

```typescript
import { directoryServiceIpRoute } from '@cdktn/provider-aws'

directoryServiceIpRoute.DirectoryServiceIpRoute.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.isTerraformResource"></a>

```typescript
import { directoryServiceIpRoute } from '@cdktn/provider-aws'

directoryServiceIpRoute.DirectoryServiceIpRoute.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.generateConfigForImport"></a>

```typescript
import { directoryServiceIpRoute } from '@cdktn/provider-aws'

directoryServiceIpRoute.DirectoryServiceIpRoute.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DirectoryServiceIpRoute resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DirectoryServiceIpRoute to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DirectoryServiceIpRoute that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/directory_service_ip_route#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DirectoryServiceIpRoute to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteTimeoutsOutputReference">DirectoryServiceIpRouteTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.property.cidrIpInput">cidrIpInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.property.cidrIpv6Input">cidrIpv6Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.property.directoryIdInput">directoryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteTimeouts">DirectoryServiceIpRouteTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.property.updateSecurityGroupForDirectoryControllersInput">updateSecurityGroupForDirectoryControllersInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.property.cidrIp">cidrIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.property.cidrIpv6">cidrIpv6</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.property.directoryId">directoryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.property.updateSecurityGroupForDirectoryControllers">updateSecurityGroupForDirectoryControllers</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.property.timeouts"></a>

```typescript
public readonly timeouts: DirectoryServiceIpRouteTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteTimeoutsOutputReference">DirectoryServiceIpRouteTimeoutsOutputReference</a>

---

##### `cidrIpInput`<sup>Optional</sup> <a name="cidrIpInput" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.property.cidrIpInput"></a>

```typescript
public readonly cidrIpInput: string;
```

- *Type:* string

---

##### `cidrIpv6Input`<sup>Optional</sup> <a name="cidrIpv6Input" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.property.cidrIpv6Input"></a>

```typescript
public readonly cidrIpv6Input: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `directoryIdInput`<sup>Optional</sup> <a name="directoryIdInput" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.property.directoryIdInput"></a>

```typescript
public readonly directoryIdInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DirectoryServiceIpRouteTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteTimeouts">DirectoryServiceIpRouteTimeouts</a>

---

##### `updateSecurityGroupForDirectoryControllersInput`<sup>Optional</sup> <a name="updateSecurityGroupForDirectoryControllersInput" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.property.updateSecurityGroupForDirectoryControllersInput"></a>

```typescript
public readonly updateSecurityGroupForDirectoryControllersInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `cidrIp`<sup>Required</sup> <a name="cidrIp" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.property.cidrIp"></a>

```typescript
public readonly cidrIp: string;
```

- *Type:* string

---

##### `cidrIpv6`<sup>Required</sup> <a name="cidrIpv6" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.property.cidrIpv6"></a>

```typescript
public readonly cidrIpv6: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.property.directoryId"></a>

```typescript
public readonly directoryId: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `updateSecurityGroupForDirectoryControllers`<sup>Required</sup> <a name="updateSecurityGroupForDirectoryControllers" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.property.updateSecurityGroupForDirectoryControllers"></a>

```typescript
public readonly updateSecurityGroupForDirectoryControllers: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRoute.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DirectoryServiceIpRouteConfig <a name="DirectoryServiceIpRouteConfig" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteConfig.Initializer"></a>

```typescript
import { directoryServiceIpRoute } from '@cdktn/provider-aws'

const directoryServiceIpRouteConfig: directoryServiceIpRoute.DirectoryServiceIpRouteConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteConfig.property.directoryId">directoryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/directory_service_ip_route#directory_id DirectoryServiceIpRoute#directory_id}. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteConfig.property.cidrIp">cidrIp</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/directory_service_ip_route#cidr_ip DirectoryServiceIpRoute#cidr_ip}. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteConfig.property.cidrIpv6">cidrIpv6</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/directory_service_ip_route#cidr_ipv6 DirectoryServiceIpRoute#cidr_ipv6}. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/directory_service_ip_route#description DirectoryServiceIpRoute#description}. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteTimeouts">DirectoryServiceIpRouteTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteConfig.property.updateSecurityGroupForDirectoryControllers">updateSecurityGroupForDirectoryControllers</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/directory_service_ip_route#update_security_group_for_directory_controllers DirectoryServiceIpRoute#update_security_group_for_directory_controllers}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteConfig.property.directoryId"></a>

```typescript
public readonly directoryId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/directory_service_ip_route#directory_id DirectoryServiceIpRoute#directory_id}.

---

##### `cidrIp`<sup>Optional</sup> <a name="cidrIp" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteConfig.property.cidrIp"></a>

```typescript
public readonly cidrIp: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/directory_service_ip_route#cidr_ip DirectoryServiceIpRoute#cidr_ip}.

---

##### `cidrIpv6`<sup>Optional</sup> <a name="cidrIpv6" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteConfig.property.cidrIpv6"></a>

```typescript
public readonly cidrIpv6: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/directory_service_ip_route#cidr_ipv6 DirectoryServiceIpRoute#cidr_ipv6}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/directory_service_ip_route#description DirectoryServiceIpRoute#description}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/directory_service_ip_route#region DirectoryServiceIpRoute#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DirectoryServiceIpRouteTimeouts;
```

- *Type:* <a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteTimeouts">DirectoryServiceIpRouteTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/directory_service_ip_route#timeouts DirectoryServiceIpRoute#timeouts}

---

##### `updateSecurityGroupForDirectoryControllers`<sup>Optional</sup> <a name="updateSecurityGroupForDirectoryControllers" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteConfig.property.updateSecurityGroupForDirectoryControllers"></a>

```typescript
public readonly updateSecurityGroupForDirectoryControllers: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/directory_service_ip_route#update_security_group_for_directory_controllers DirectoryServiceIpRoute#update_security_group_for_directory_controllers}.

---

### DirectoryServiceIpRouteTimeouts <a name="DirectoryServiceIpRouteTimeouts" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteTimeouts.Initializer"></a>

```typescript
import { directoryServiceIpRoute } from '@cdktn/provider-aws'

const directoryServiceIpRouteTimeouts: directoryServiceIpRoute.DirectoryServiceIpRouteTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/directory_service_ip_route#create DirectoryServiceIpRoute#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/resources/directory_service_ip_route#delete DirectoryServiceIpRoute#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### DirectoryServiceIpRouteTimeoutsOutputReference <a name="DirectoryServiceIpRouteTimeoutsOutputReference" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteTimeoutsOutputReference.Initializer"></a>

```typescript
import { directoryServiceIpRoute } from '@cdktn/provider-aws'

new directoryServiceIpRoute.DirectoryServiceIpRouteTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteTimeouts">DirectoryServiceIpRouteTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DirectoryServiceIpRouteTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.directoryServiceIpRoute.DirectoryServiceIpRouteTimeouts">DirectoryServiceIpRouteTimeouts</a>

---



