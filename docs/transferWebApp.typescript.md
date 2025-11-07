# `transferWebApp` Submodule <a name="`transferWebApp` Submodule" id="@cdktf/provider-aws.transferWebApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TransferWebApp <a name="TransferWebApp" id="@cdktf/provider-aws.transferWebApp.TransferWebApp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/transfer_web_app aws_transfer_web_app}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.Initializer"></a>

```typescript
import { transferWebApp } from '@cdktf/provider-aws'

new transferWebApp.TransferWebApp(scope: Construct, id: string, config?: TransferWebAppConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppConfig">TransferWebAppConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppConfig">TransferWebAppConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.putIdentityProviderDetails">putIdentityProviderDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.putWebAppUnits">putWebAppUnits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.resetAccessEndpoint">resetAccessEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.resetIdentityProviderDetails">resetIdentityProviderDetails</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.resetWebAppEndpointPolicy">resetWebAppEndpointPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.resetWebAppUnits">resetWebAppUnits</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIdentityProviderDetails` <a name="putIdentityProviderDetails" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.putIdentityProviderDetails"></a>

```typescript
public putIdentityProviderDetails(value: IResolvable | TransferWebAppIdentityProviderDetails[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.putIdentityProviderDetails.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetails">TransferWebAppIdentityProviderDetails</a>[]

---

##### `putWebAppUnits` <a name="putWebAppUnits" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.putWebAppUnits"></a>

```typescript
public putWebAppUnits(value: IResolvable | TransferWebAppWebAppUnits[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.putWebAppUnits.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnits">TransferWebAppWebAppUnits</a>[]

---

##### `resetAccessEndpoint` <a name="resetAccessEndpoint" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.resetAccessEndpoint"></a>

```typescript
public resetAccessEndpoint(): void
```

##### `resetIdentityProviderDetails` <a name="resetIdentityProviderDetails" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.resetIdentityProviderDetails"></a>

```typescript
public resetIdentityProviderDetails(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetWebAppEndpointPolicy` <a name="resetWebAppEndpointPolicy" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.resetWebAppEndpointPolicy"></a>

```typescript
public resetWebAppEndpointPolicy(): void
```

##### `resetWebAppUnits` <a name="resetWebAppUnits" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.resetWebAppUnits"></a>

```typescript
public resetWebAppUnits(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a TransferWebApp resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.isConstruct"></a>

```typescript
import { transferWebApp } from '@cdktf/provider-aws'

transferWebApp.TransferWebApp.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.isTerraformElement"></a>

```typescript
import { transferWebApp } from '@cdktf/provider-aws'

transferWebApp.TransferWebApp.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.isTerraformResource"></a>

```typescript
import { transferWebApp } from '@cdktf/provider-aws'

transferWebApp.TransferWebApp.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.generateConfigForImport"></a>

```typescript
import { transferWebApp } from '@cdktf/provider-aws'

transferWebApp.TransferWebApp.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a TransferWebApp resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TransferWebApp to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TransferWebApp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/transfer_web_app#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the TransferWebApp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.property.identityProviderDetails">identityProviderDetails</a></code> | <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList">TransferWebAppIdentityProviderDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.property.tagsAll">tagsAll</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.property.webAppId">webAppId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.property.webAppUnits">webAppUnits</a></code> | <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList">TransferWebAppWebAppUnitsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.property.accessEndpointInput">accessEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.property.identityProviderDetailsInput">identityProviderDetailsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetails">TransferWebAppIdentityProviderDetails</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.property.webAppEndpointPolicyInput">webAppEndpointPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.property.webAppUnitsInput">webAppUnitsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnits">TransferWebAppWebAppUnits</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.property.accessEndpoint">accessEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.property.webAppEndpointPolicy">webAppEndpointPolicy</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `identityProviderDetails`<sup>Required</sup> <a name="identityProviderDetails" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.property.identityProviderDetails"></a>

```typescript
public readonly identityProviderDetails: TransferWebAppIdentityProviderDetailsList;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList">TransferWebAppIdentityProviderDetailsList</a>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `webAppId`<sup>Required</sup> <a name="webAppId" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.property.webAppId"></a>

```typescript
public readonly webAppId: string;
```

- *Type:* string

---

##### `webAppUnits`<sup>Required</sup> <a name="webAppUnits" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.property.webAppUnits"></a>

```typescript
public readonly webAppUnits: TransferWebAppWebAppUnitsList;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList">TransferWebAppWebAppUnitsList</a>

---

##### `accessEndpointInput`<sup>Optional</sup> <a name="accessEndpointInput" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.property.accessEndpointInput"></a>

```typescript
public readonly accessEndpointInput: string;
```

- *Type:* string

---

##### `identityProviderDetailsInput`<sup>Optional</sup> <a name="identityProviderDetailsInput" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.property.identityProviderDetailsInput"></a>

```typescript
public readonly identityProviderDetailsInput: IResolvable | TransferWebAppIdentityProviderDetails[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetails">TransferWebAppIdentityProviderDetails</a>[]

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `webAppEndpointPolicyInput`<sup>Optional</sup> <a name="webAppEndpointPolicyInput" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.property.webAppEndpointPolicyInput"></a>

```typescript
public readonly webAppEndpointPolicyInput: string;
```

- *Type:* string

---

##### `webAppUnitsInput`<sup>Optional</sup> <a name="webAppUnitsInput" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.property.webAppUnitsInput"></a>

```typescript
public readonly webAppUnitsInput: IResolvable | TransferWebAppWebAppUnits[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnits">TransferWebAppWebAppUnits</a>[]

---

##### `accessEndpoint`<sup>Required</sup> <a name="accessEndpoint" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.property.accessEndpoint"></a>

```typescript
public readonly accessEndpoint: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `webAppEndpointPolicy`<sup>Required</sup> <a name="webAppEndpointPolicy" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.property.webAppEndpointPolicy"></a>

```typescript
public readonly webAppEndpointPolicy: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebApp.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.transferWebApp.TransferWebApp.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TransferWebAppConfig <a name="TransferWebAppConfig" id="@cdktf/provider-aws.transferWebApp.TransferWebAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWebApp.TransferWebAppConfig.Initializer"></a>

```typescript
import { transferWebApp } from '@cdktf/provider-aws'

const transferWebAppConfig: transferWebApp.TransferWebAppConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppConfig.property.accessEndpoint">accessEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/transfer_web_app#access_endpoint TransferWebApp#access_endpoint}. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppConfig.property.identityProviderDetails">identityProviderDetails</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetails">TransferWebAppIdentityProviderDetails</a>[]</code> | identity_provider_details block. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/transfer_web_app#tags TransferWebApp#tags}. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppConfig.property.webAppEndpointPolicy">webAppEndpointPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/transfer_web_app#web_app_endpoint_policy TransferWebApp#web_app_endpoint_policy}. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppConfig.property.webAppUnits">webAppUnits</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnits">TransferWebAppWebAppUnits</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/transfer_web_app#web_app_units TransferWebApp#web_app_units}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.transferWebApp.TransferWebAppConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.transferWebApp.TransferWebAppConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.transferWebApp.TransferWebAppConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.transferWebApp.TransferWebAppConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.transferWebApp.TransferWebAppConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.transferWebApp.TransferWebAppConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.transferWebApp.TransferWebAppConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accessEndpoint`<sup>Optional</sup> <a name="accessEndpoint" id="@cdktf/provider-aws.transferWebApp.TransferWebAppConfig.property.accessEndpoint"></a>

```typescript
public readonly accessEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/transfer_web_app#access_endpoint TransferWebApp#access_endpoint}.

---

##### `identityProviderDetails`<sup>Optional</sup> <a name="identityProviderDetails" id="@cdktf/provider-aws.transferWebApp.TransferWebAppConfig.property.identityProviderDetails"></a>

```typescript
public readonly identityProviderDetails: IResolvable | TransferWebAppIdentityProviderDetails[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetails">TransferWebAppIdentityProviderDetails</a>[]

identity_provider_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/transfer_web_app#identity_provider_details TransferWebApp#identity_provider_details}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-aws.transferWebApp.TransferWebAppConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/transfer_web_app#region TransferWebApp#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.transferWebApp.TransferWebAppConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/transfer_web_app#tags TransferWebApp#tags}.

---

##### `webAppEndpointPolicy`<sup>Optional</sup> <a name="webAppEndpointPolicy" id="@cdktf/provider-aws.transferWebApp.TransferWebAppConfig.property.webAppEndpointPolicy"></a>

```typescript
public readonly webAppEndpointPolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/transfer_web_app#web_app_endpoint_policy TransferWebApp#web_app_endpoint_policy}.

---

##### `webAppUnits`<sup>Optional</sup> <a name="webAppUnits" id="@cdktf/provider-aws.transferWebApp.TransferWebAppConfig.property.webAppUnits"></a>

```typescript
public readonly webAppUnits: IResolvable | TransferWebAppWebAppUnits[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnits">TransferWebAppWebAppUnits</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/transfer_web_app#web_app_units TransferWebApp#web_app_units}.

---

### TransferWebAppIdentityProviderDetails <a name="TransferWebAppIdentityProviderDetails" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetails"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetails.Initializer"></a>

```typescript
import { transferWebApp } from '@cdktf/provider-aws'

const transferWebAppIdentityProviderDetails: transferWebApp.TransferWebAppIdentityProviderDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetails.property.identityCenterConfig">identityCenterConfig</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfig">TransferWebAppIdentityProviderDetailsIdentityCenterConfig</a>[]</code> | identity_center_config block. |

---

##### `identityCenterConfig`<sup>Optional</sup> <a name="identityCenterConfig" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetails.property.identityCenterConfig"></a>

```typescript
public readonly identityCenterConfig: IResolvable | TransferWebAppIdentityProviderDetailsIdentityCenterConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfig">TransferWebAppIdentityProviderDetailsIdentityCenterConfig</a>[]

identity_center_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/transfer_web_app#identity_center_config TransferWebApp#identity_center_config}

---

### TransferWebAppIdentityProviderDetailsIdentityCenterConfig <a name="TransferWebAppIdentityProviderDetailsIdentityCenterConfig" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfig.Initializer"></a>

```typescript
import { transferWebApp } from '@cdktf/provider-aws'

const transferWebAppIdentityProviderDetailsIdentityCenterConfig: transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfig.property.instanceArn">instanceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/transfer_web_app#instance_arn TransferWebApp#instance_arn}. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfig.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/transfer_web_app#role TransferWebApp#role}. |

---

##### `instanceArn`<sup>Optional</sup> <a name="instanceArn" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfig.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/transfer_web_app#instance_arn TransferWebApp#instance_arn}.

---

##### `role`<sup>Optional</sup> <a name="role" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/transfer_web_app#role TransferWebApp#role}.

---

### TransferWebAppWebAppUnits <a name="TransferWebAppWebAppUnits" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnits.Initializer"></a>

```typescript
import { transferWebApp } from '@cdktf/provider-aws'

const transferWebAppWebAppUnits: transferWebApp.TransferWebAppWebAppUnits = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnits.property.provisioned">provisioned</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/transfer_web_app#provisioned TransferWebApp#provisioned}. |

---

##### `provisioned`<sup>Optional</sup> <a name="provisioned" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnits.property.provisioned"></a>

```typescript
public readonly provisioned: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.20.0/docs/resources/transfer_web_app#provisioned TransferWebApp#provisioned}.

---

## Classes <a name="Classes" id="Classes"></a>

### TransferWebAppIdentityProviderDetailsIdentityCenterConfigList <a name="TransferWebAppIdentityProviderDetailsIdentityCenterConfigList" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList.Initializer"></a>

```typescript
import { transferWebApp } from '@cdktf/provider-aws'

new transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList.get"></a>

```typescript
public get(index: number): TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfig">TransferWebAppIdentityProviderDetailsIdentityCenterConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TransferWebAppIdentityProviderDetailsIdentityCenterConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfig">TransferWebAppIdentityProviderDetailsIdentityCenterConfig</a>[]

---


### TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference <a name="TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.Initializer"></a>

```typescript
import { transferWebApp } from '@cdktf/provider-aws'

new transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.resetInstanceArn">resetInstanceArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.resetRole">resetRole</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInstanceArn` <a name="resetInstanceArn" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.resetInstanceArn"></a>

```typescript
public resetInstanceArn(): void
```

##### `resetRole` <a name="resetRole" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.resetRole"></a>

```typescript
public resetRole(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.property.applicationArn">applicationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.property.instanceArnInput">instanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.property.instanceArn">instanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfig">TransferWebAppIdentityProviderDetailsIdentityCenterConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applicationArn`<sup>Required</sup> <a name="applicationArn" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.property.applicationArn"></a>

```typescript
public readonly applicationArn: string;
```

- *Type:* string

---

##### `instanceArnInput`<sup>Optional</sup> <a name="instanceArnInput" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.property.instanceArnInput"></a>

```typescript
public readonly instanceArnInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TransferWebAppIdentityProviderDetailsIdentityCenterConfig;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfig">TransferWebAppIdentityProviderDetailsIdentityCenterConfig</a>

---


### TransferWebAppIdentityProviderDetailsList <a name="TransferWebAppIdentityProviderDetailsList" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList.Initializer"></a>

```typescript
import { transferWebApp } from '@cdktf/provider-aws'

new transferWebApp.TransferWebAppIdentityProviderDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList.get"></a>

```typescript
public get(index: number): TransferWebAppIdentityProviderDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetails">TransferWebAppIdentityProviderDetails</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TransferWebAppIdentityProviderDetails[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetails">TransferWebAppIdentityProviderDetails</a>[]

---


### TransferWebAppIdentityProviderDetailsOutputReference <a name="TransferWebAppIdentityProviderDetailsOutputReference" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.Initializer"></a>

```typescript
import { transferWebApp } from '@cdktf/provider-aws'

new transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.putIdentityCenterConfig">putIdentityCenterConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.resetIdentityCenterConfig">resetIdentityCenterConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIdentityCenterConfig` <a name="putIdentityCenterConfig" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.putIdentityCenterConfig"></a>

```typescript
public putIdentityCenterConfig(value: IResolvable | TransferWebAppIdentityProviderDetailsIdentityCenterConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.putIdentityCenterConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfig">TransferWebAppIdentityProviderDetailsIdentityCenterConfig</a>[]

---

##### `resetIdentityCenterConfig` <a name="resetIdentityCenterConfig" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.resetIdentityCenterConfig"></a>

```typescript
public resetIdentityCenterConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.property.identityCenterConfig">identityCenterConfig</a></code> | <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList">TransferWebAppIdentityProviderDetailsIdentityCenterConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.property.identityCenterConfigInput">identityCenterConfigInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfig">TransferWebAppIdentityProviderDetailsIdentityCenterConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetails">TransferWebAppIdentityProviderDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `identityCenterConfig`<sup>Required</sup> <a name="identityCenterConfig" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.property.identityCenterConfig"></a>

```typescript
public readonly identityCenterConfig: TransferWebAppIdentityProviderDetailsIdentityCenterConfigList;
```

- *Type:* <a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList">TransferWebAppIdentityProviderDetailsIdentityCenterConfigList</a>

---

##### `identityCenterConfigInput`<sup>Optional</sup> <a name="identityCenterConfigInput" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.property.identityCenterConfigInput"></a>

```typescript
public readonly identityCenterConfigInput: IResolvable | TransferWebAppIdentityProviderDetailsIdentityCenterConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfig">TransferWebAppIdentityProviderDetailsIdentityCenterConfig</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TransferWebAppIdentityProviderDetails;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetails">TransferWebAppIdentityProviderDetails</a>

---


### TransferWebAppWebAppUnitsList <a name="TransferWebAppWebAppUnitsList" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList.Initializer"></a>

```typescript
import { transferWebApp } from '@cdktf/provider-aws'

new transferWebApp.TransferWebAppWebAppUnitsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList.get"></a>

```typescript
public get(index: number): TransferWebAppWebAppUnitsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnits">TransferWebAppWebAppUnits</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TransferWebAppWebAppUnits[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnits">TransferWebAppWebAppUnits</a>[]

---


### TransferWebAppWebAppUnitsOutputReference <a name="TransferWebAppWebAppUnitsOutputReference" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.Initializer"></a>

```typescript
import { transferWebApp } from '@cdktf/provider-aws'

new transferWebApp.TransferWebAppWebAppUnitsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.resetProvisioned">resetProvisioned</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetProvisioned` <a name="resetProvisioned" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.resetProvisioned"></a>

```typescript
public resetProvisioned(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.property.provisionedInput">provisionedInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.property.provisioned">provisioned</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnits">TransferWebAppWebAppUnits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `provisionedInput`<sup>Optional</sup> <a name="provisionedInput" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.property.provisionedInput"></a>

```typescript
public readonly provisionedInput: number;
```

- *Type:* number

---

##### `provisioned`<sup>Required</sup> <a name="provisioned" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.property.provisioned"></a>

```typescript
public readonly provisioned: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TransferWebAppWebAppUnits;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.transferWebApp.TransferWebAppWebAppUnits">TransferWebAppWebAppUnits</a>

---



