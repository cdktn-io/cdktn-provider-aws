# `transferWebApp` Submodule <a name="`transferWebApp` Submodule" id="@cdktn/provider-aws.transferWebApp"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TransferWebApp <a name="TransferWebApp" id="@cdktn/provider-aws.transferWebApp.TransferWebApp"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/transfer_web_app aws_transfer_web_app}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.Initializer"></a>

```typescript
import { transferWebApp } from '@cdktn/provider-aws'

new transferWebApp.TransferWebApp(scope: Construct, id: string, config?: TransferWebAppConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebApp.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebApp.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebApp.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppConfig">TransferWebAppConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppConfig">TransferWebAppConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebApp.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebApp.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebApp.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebApp.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebApp.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebApp.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebApp.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebApp.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebApp.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebApp.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebApp.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebApp.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebApp.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebApp.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebApp.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebApp.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebApp.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebApp.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebApp.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebApp.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebApp.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebApp.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebApp.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebApp.putEndpointDetails">putEndpointDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebApp.putIdentityProviderDetails">putIdentityProviderDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebApp.putWebAppUnits">putWebAppUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebApp.resetAccessEndpoint">resetAccessEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebApp.resetEndpointDetails">resetEndpointDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebApp.resetIdentityProviderDetails">resetIdentityProviderDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebApp.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebApp.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebApp.resetWebAppEndpointPolicy">resetWebAppEndpointPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebApp.resetWebAppUnits">resetWebAppUnits</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEndpointDetails` <a name="putEndpointDetails" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.putEndpointDetails"></a>

```typescript
public putEndpointDetails(value: IResolvable | TransferWebAppEndpointDetails[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.putEndpointDetails.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetails">TransferWebAppEndpointDetails</a>[]

---

##### `putIdentityProviderDetails` <a name="putIdentityProviderDetails" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.putIdentityProviderDetails"></a>

```typescript
public putIdentityProviderDetails(value: IResolvable | TransferWebAppIdentityProviderDetails[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.putIdentityProviderDetails.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetails">TransferWebAppIdentityProviderDetails</a>[]

---

##### `putWebAppUnits` <a name="putWebAppUnits" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.putWebAppUnits"></a>

```typescript
public putWebAppUnits(value: IResolvable | TransferWebAppWebAppUnits[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.putWebAppUnits.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnits">TransferWebAppWebAppUnits</a>[]

---

##### `resetAccessEndpoint` <a name="resetAccessEndpoint" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.resetAccessEndpoint"></a>

```typescript
public resetAccessEndpoint(): void
```

##### `resetEndpointDetails` <a name="resetEndpointDetails" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.resetEndpointDetails"></a>

```typescript
public resetEndpointDetails(): void
```

##### `resetIdentityProviderDetails` <a name="resetIdentityProviderDetails" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.resetIdentityProviderDetails"></a>

```typescript
public resetIdentityProviderDetails(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetWebAppEndpointPolicy` <a name="resetWebAppEndpointPolicy" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.resetWebAppEndpointPolicy"></a>

```typescript
public resetWebAppEndpointPolicy(): void
```

##### `resetWebAppUnits` <a name="resetWebAppUnits" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.resetWebAppUnits"></a>

```typescript
public resetWebAppUnits(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebApp.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebApp.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebApp.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebApp.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a TransferWebApp resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.isConstruct"></a>

```typescript
import { transferWebApp } from '@cdktn/provider-aws'

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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.isTerraformElement"></a>

```typescript
import { transferWebApp } from '@cdktn/provider-aws'

transferWebApp.TransferWebApp.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.isTerraformResource"></a>

```typescript
import { transferWebApp } from '@cdktn/provider-aws'

transferWebApp.TransferWebApp.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.generateConfigForImport"></a>

```typescript
import { transferWebApp } from '@cdktn/provider-aws'

transferWebApp.TransferWebApp.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a TransferWebApp resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TransferWebApp to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TransferWebApp that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/transfer_web_app#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the TransferWebApp to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebApp.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebApp.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebApp.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebApp.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebApp.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebApp.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebApp.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebApp.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebApp.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebApp.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebApp.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebApp.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebApp.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebApp.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebApp.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebApp.property.endpointDetails">endpointDetails</a></code> | <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsList">TransferWebAppEndpointDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebApp.property.identityProviderDetails">identityProviderDetails</a></code> | <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList">TransferWebAppIdentityProviderDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebApp.property.tagsAll">tagsAll</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebApp.property.webAppId">webAppId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebApp.property.webAppUnits">webAppUnits</a></code> | <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList">TransferWebAppWebAppUnitsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebApp.property.accessEndpointInput">accessEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebApp.property.endpointDetailsInput">endpointDetailsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetails">TransferWebAppEndpointDetails</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebApp.property.identityProviderDetailsInput">identityProviderDetailsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetails">TransferWebAppIdentityProviderDetails</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebApp.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebApp.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebApp.property.webAppEndpointPolicyInput">webAppEndpointPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebApp.property.webAppUnitsInput">webAppUnitsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnits">TransferWebAppWebAppUnits</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebApp.property.accessEndpoint">accessEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebApp.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebApp.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebApp.property.webAppEndpointPolicy">webAppEndpointPolicy</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `endpointDetails`<sup>Required</sup> <a name="endpointDetails" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.property.endpointDetails"></a>

```typescript
public readonly endpointDetails: TransferWebAppEndpointDetailsList;
```

- *Type:* <a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsList">TransferWebAppEndpointDetailsList</a>

---

##### `identityProviderDetails`<sup>Required</sup> <a name="identityProviderDetails" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.property.identityProviderDetails"></a>

```typescript
public readonly identityProviderDetails: TransferWebAppIdentityProviderDetailsList;
```

- *Type:* <a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList">TransferWebAppIdentityProviderDetailsList</a>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `webAppId`<sup>Required</sup> <a name="webAppId" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.property.webAppId"></a>

```typescript
public readonly webAppId: string;
```

- *Type:* string

---

##### `webAppUnits`<sup>Required</sup> <a name="webAppUnits" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.property.webAppUnits"></a>

```typescript
public readonly webAppUnits: TransferWebAppWebAppUnitsList;
```

- *Type:* <a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList">TransferWebAppWebAppUnitsList</a>

---

##### `accessEndpointInput`<sup>Optional</sup> <a name="accessEndpointInput" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.property.accessEndpointInput"></a>

```typescript
public readonly accessEndpointInput: string;
```

- *Type:* string

---

##### `endpointDetailsInput`<sup>Optional</sup> <a name="endpointDetailsInput" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.property.endpointDetailsInput"></a>

```typescript
public readonly endpointDetailsInput: IResolvable | TransferWebAppEndpointDetails[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetails">TransferWebAppEndpointDetails</a>[]

---

##### `identityProviderDetailsInput`<sup>Optional</sup> <a name="identityProviderDetailsInput" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.property.identityProviderDetailsInput"></a>

```typescript
public readonly identityProviderDetailsInput: IResolvable | TransferWebAppIdentityProviderDetails[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetails">TransferWebAppIdentityProviderDetails</a>[]

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `webAppEndpointPolicyInput`<sup>Optional</sup> <a name="webAppEndpointPolicyInput" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.property.webAppEndpointPolicyInput"></a>

```typescript
public readonly webAppEndpointPolicyInput: string;
```

- *Type:* string

---

##### `webAppUnitsInput`<sup>Optional</sup> <a name="webAppUnitsInput" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.property.webAppUnitsInput"></a>

```typescript
public readonly webAppUnitsInput: IResolvable | TransferWebAppWebAppUnits[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnits">TransferWebAppWebAppUnits</a>[]

---

##### `accessEndpoint`<sup>Required</sup> <a name="accessEndpoint" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.property.accessEndpoint"></a>

```typescript
public readonly accessEndpoint: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `webAppEndpointPolicy`<sup>Required</sup> <a name="webAppEndpointPolicy" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.property.webAppEndpointPolicy"></a>

```typescript
public readonly webAppEndpointPolicy: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebApp.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.transferWebApp.TransferWebApp.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TransferWebAppConfig <a name="TransferWebAppConfig" id="@cdktn/provider-aws.transferWebApp.TransferWebAppConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.transferWebApp.TransferWebAppConfig.Initializer"></a>

```typescript
import { transferWebApp } from '@cdktn/provider-aws'

const transferWebAppConfig: transferWebApp.TransferWebAppConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppConfig.property.accessEndpoint">accessEndpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/transfer_web_app#access_endpoint TransferWebApp#access_endpoint}. |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppConfig.property.endpointDetails">endpointDetails</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetails">TransferWebAppEndpointDetails</a>[]</code> | endpoint_details block. |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppConfig.property.identityProviderDetails">identityProviderDetails</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetails">TransferWebAppIdentityProviderDetails</a>[]</code> | identity_provider_details block. |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/transfer_web_app#tags TransferWebApp#tags}. |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppConfig.property.webAppEndpointPolicy">webAppEndpointPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/transfer_web_app#web_app_endpoint_policy TransferWebApp#web_app_endpoint_policy}. |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppConfig.property.webAppUnits">webAppUnits</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnits">TransferWebAppWebAppUnits</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/transfer_web_app#web_app_units TransferWebApp#web_app_units}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.transferWebApp.TransferWebAppConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.transferWebApp.TransferWebAppConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.transferWebApp.TransferWebAppConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.transferWebApp.TransferWebAppConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.transferWebApp.TransferWebAppConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.transferWebApp.TransferWebAppConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.transferWebApp.TransferWebAppConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accessEndpoint`<sup>Optional</sup> <a name="accessEndpoint" id="@cdktn/provider-aws.transferWebApp.TransferWebAppConfig.property.accessEndpoint"></a>

```typescript
public readonly accessEndpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/transfer_web_app#access_endpoint TransferWebApp#access_endpoint}.

---

##### `endpointDetails`<sup>Optional</sup> <a name="endpointDetails" id="@cdktn/provider-aws.transferWebApp.TransferWebAppConfig.property.endpointDetails"></a>

```typescript
public readonly endpointDetails: IResolvable | TransferWebAppEndpointDetails[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetails">TransferWebAppEndpointDetails</a>[]

endpoint_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/transfer_web_app#endpoint_details TransferWebApp#endpoint_details}

---

##### `identityProviderDetails`<sup>Optional</sup> <a name="identityProviderDetails" id="@cdktn/provider-aws.transferWebApp.TransferWebAppConfig.property.identityProviderDetails"></a>

```typescript
public readonly identityProviderDetails: IResolvable | TransferWebAppIdentityProviderDetails[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetails">TransferWebAppIdentityProviderDetails</a>[]

identity_provider_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/transfer_web_app#identity_provider_details TransferWebApp#identity_provider_details}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.transferWebApp.TransferWebAppConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/transfer_web_app#region TransferWebApp#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.transferWebApp.TransferWebAppConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/transfer_web_app#tags TransferWebApp#tags}.

---

##### `webAppEndpointPolicy`<sup>Optional</sup> <a name="webAppEndpointPolicy" id="@cdktn/provider-aws.transferWebApp.TransferWebAppConfig.property.webAppEndpointPolicy"></a>

```typescript
public readonly webAppEndpointPolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/transfer_web_app#web_app_endpoint_policy TransferWebApp#web_app_endpoint_policy}.

---

##### `webAppUnits`<sup>Optional</sup> <a name="webAppUnits" id="@cdktn/provider-aws.transferWebApp.TransferWebAppConfig.property.webAppUnits"></a>

```typescript
public readonly webAppUnits: IResolvable | TransferWebAppWebAppUnits[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnits">TransferWebAppWebAppUnits</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/transfer_web_app#web_app_units TransferWebApp#web_app_units}.

---

### TransferWebAppEndpointDetails <a name="TransferWebAppEndpointDetails" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetails.Initializer"></a>

```typescript
import { transferWebApp } from '@cdktn/provider-aws'

const transferWebAppEndpointDetails: transferWebApp.TransferWebAppEndpointDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetails.property.vpc">vpc</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpc">TransferWebAppEndpointDetailsVpc</a>[]</code> | vpc block. |

---

##### `vpc`<sup>Optional</sup> <a name="vpc" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetails.property.vpc"></a>

```typescript
public readonly vpc: IResolvable | TransferWebAppEndpointDetailsVpc[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpc">TransferWebAppEndpointDetailsVpc</a>[]

vpc block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/transfer_web_app#vpc TransferWebApp#vpc}

---

### TransferWebAppEndpointDetailsVpc <a name="TransferWebAppEndpointDetailsVpc" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpc"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpc.Initializer"></a>

```typescript
import { transferWebApp } from '@cdktn/provider-aws'

const transferWebAppEndpointDetailsVpc: transferWebApp.TransferWebAppEndpointDetailsVpc = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpc.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/transfer_web_app#subnet_ids TransferWebApp#subnet_ids}. |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpc.property.vpcId">vpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/transfer_web_app#vpc_id TransferWebApp#vpc_id}. |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpc.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/transfer_web_app#security_group_ids TransferWebApp#security_group_ids}. |

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpc.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/transfer_web_app#subnet_ids TransferWebApp#subnet_ids}.

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpc.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/transfer_web_app#vpc_id TransferWebApp#vpc_id}.

---

##### `securityGroupIds`<sup>Optional</sup> <a name="securityGroupIds" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpc.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/transfer_web_app#security_group_ids TransferWebApp#security_group_ids}.

---

### TransferWebAppIdentityProviderDetails <a name="TransferWebAppIdentityProviderDetails" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetails.Initializer"></a>

```typescript
import { transferWebApp } from '@cdktn/provider-aws'

const transferWebAppIdentityProviderDetails: transferWebApp.TransferWebAppIdentityProviderDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetails.property.identityCenterConfig">identityCenterConfig</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfig">TransferWebAppIdentityProviderDetailsIdentityCenterConfig</a>[]</code> | identity_center_config block. |

---

##### `identityCenterConfig`<sup>Optional</sup> <a name="identityCenterConfig" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetails.property.identityCenterConfig"></a>

```typescript
public readonly identityCenterConfig: IResolvable | TransferWebAppIdentityProviderDetailsIdentityCenterConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfig">TransferWebAppIdentityProviderDetailsIdentityCenterConfig</a>[]

identity_center_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/transfer_web_app#identity_center_config TransferWebApp#identity_center_config}

---

### TransferWebAppIdentityProviderDetailsIdentityCenterConfig <a name="TransferWebAppIdentityProviderDetailsIdentityCenterConfig" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfig.Initializer"></a>

```typescript
import { transferWebApp } from '@cdktn/provider-aws'

const transferWebAppIdentityProviderDetailsIdentityCenterConfig: transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfig.property.instanceArn">instanceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/transfer_web_app#instance_arn TransferWebApp#instance_arn}. |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfig.property.role">role</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/transfer_web_app#role TransferWebApp#role}. |

---

##### `instanceArn`<sup>Optional</sup> <a name="instanceArn" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfig.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/transfer_web_app#instance_arn TransferWebApp#instance_arn}.

---

##### `role`<sup>Optional</sup> <a name="role" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/transfer_web_app#role TransferWebApp#role}.

---

### TransferWebAppWebAppUnits <a name="TransferWebAppWebAppUnits" id="@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnits.Initializer"></a>

```typescript
import { transferWebApp } from '@cdktn/provider-aws'

const transferWebAppWebAppUnits: transferWebApp.TransferWebAppWebAppUnits = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnits.property.provisioned">provisioned</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/transfer_web_app#provisioned TransferWebApp#provisioned}. |

---

##### `provisioned`<sup>Optional</sup> <a name="provisioned" id="@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnits.property.provisioned"></a>

```typescript
public readonly provisioned: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/transfer_web_app#provisioned TransferWebApp#provisioned}.

---

## Classes <a name="Classes" id="Classes"></a>

### TransferWebAppEndpointDetailsList <a name="TransferWebAppEndpointDetailsList" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsList.Initializer"></a>

```typescript
import { transferWebApp } from '@cdktn/provider-aws'

new transferWebApp.TransferWebAppEndpointDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsList.get"></a>

```typescript
public get(index: number): TransferWebAppEndpointDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetails">TransferWebAppEndpointDetails</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TransferWebAppEndpointDetails[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetails">TransferWebAppEndpointDetails</a>[]

---


### TransferWebAppEndpointDetailsOutputReference <a name="TransferWebAppEndpointDetailsOutputReference" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsOutputReference.Initializer"></a>

```typescript
import { transferWebApp } from '@cdktn/provider-aws'

new transferWebApp.TransferWebAppEndpointDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsOutputReference.putVpc">putVpc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsOutputReference.resetVpc">resetVpc</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putVpc` <a name="putVpc" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsOutputReference.putVpc"></a>

```typescript
public putVpc(value: IResolvable | TransferWebAppEndpointDetailsVpc[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsOutputReference.putVpc.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpc">TransferWebAppEndpointDetailsVpc</a>[]

---

##### `resetVpc` <a name="resetVpc" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsOutputReference.resetVpc"></a>

```typescript
public resetVpc(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsOutputReference.property.vpc">vpc</a></code> | <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcList">TransferWebAppEndpointDetailsVpcList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsOutputReference.property.vpcInput">vpcInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpc">TransferWebAppEndpointDetailsVpc</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetails">TransferWebAppEndpointDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `vpc`<sup>Required</sup> <a name="vpc" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsOutputReference.property.vpc"></a>

```typescript
public readonly vpc: TransferWebAppEndpointDetailsVpcList;
```

- *Type:* <a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcList">TransferWebAppEndpointDetailsVpcList</a>

---

##### `vpcInput`<sup>Optional</sup> <a name="vpcInput" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsOutputReference.property.vpcInput"></a>

```typescript
public readonly vpcInput: IResolvable | TransferWebAppEndpointDetailsVpc[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpc">TransferWebAppEndpointDetailsVpc</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TransferWebAppEndpointDetails;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetails">TransferWebAppEndpointDetails</a>

---


### TransferWebAppEndpointDetailsVpcList <a name="TransferWebAppEndpointDetailsVpcList" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcList.Initializer"></a>

```typescript
import { transferWebApp } from '@cdktn/provider-aws'

new transferWebApp.TransferWebAppEndpointDetailsVpcList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcList.get"></a>

```typescript
public get(index: number): TransferWebAppEndpointDetailsVpcOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpc">TransferWebAppEndpointDetailsVpc</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TransferWebAppEndpointDetailsVpc[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpc">TransferWebAppEndpointDetailsVpc</a>[]

---


### TransferWebAppEndpointDetailsVpcOutputReference <a name="TransferWebAppEndpointDetailsVpcOutputReference" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.Initializer"></a>

```typescript
import { transferWebApp } from '@cdktn/provider-aws'

new transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.resetSecurityGroupIds">resetSecurityGroupIds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecurityGroupIds` <a name="resetSecurityGroupIds" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.resetSecurityGroupIds"></a>

```typescript
public resetSecurityGroupIds(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.property.vpcEndpointId">vpcEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.property.subnetIdsInput">subnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.property.vpcIdInput">vpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.property.securityGroupIds">securityGroupIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpc">TransferWebAppEndpointDetailsVpc</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `vpcEndpointId`<sup>Required</sup> <a name="vpcEndpointId" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.property.vpcEndpointId"></a>

```typescript
public readonly vpcEndpointId: string;
```

- *Type:* string

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.property.securityGroupIdsInput"></a>

```typescript
public readonly securityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.property.subnetIdsInput"></a>

```typescript
public readonly subnetIdsInput: string[];
```

- *Type:* string[]

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.property.vpcIdInput"></a>

```typescript
public readonly vpcIdInput: string;
```

- *Type:* string

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.property.securityGroupIds"></a>

```typescript
public readonly securityGroupIds: string[];
```

- *Type:* string[]

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpcOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TransferWebAppEndpointDetailsVpc;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppEndpointDetailsVpc">TransferWebAppEndpointDetailsVpc</a>

---


### TransferWebAppIdentityProviderDetailsIdentityCenterConfigList <a name="TransferWebAppIdentityProviderDetailsIdentityCenterConfigList" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList.Initializer"></a>

```typescript
import { transferWebApp } from '@cdktn/provider-aws'

new transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList.get"></a>

```typescript
public get(index: number): TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfig">TransferWebAppIdentityProviderDetailsIdentityCenterConfig</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TransferWebAppIdentityProviderDetailsIdentityCenterConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfig">TransferWebAppIdentityProviderDetailsIdentityCenterConfig</a>[]

---


### TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference <a name="TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.Initializer"></a>

```typescript
import { transferWebApp } from '@cdktn/provider-aws'

new transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.resetInstanceArn">resetInstanceArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.resetRole">resetRole</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInstanceArn` <a name="resetInstanceArn" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.resetInstanceArn"></a>

```typescript
public resetInstanceArn(): void
```

##### `resetRole` <a name="resetRole" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.resetRole"></a>

```typescript
public resetRole(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.property.applicationArn">applicationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.property.instanceArnInput">instanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.property.instanceArn">instanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfig">TransferWebAppIdentityProviderDetailsIdentityCenterConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applicationArn`<sup>Required</sup> <a name="applicationArn" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.property.applicationArn"></a>

```typescript
public readonly applicationArn: string;
```

- *Type:* string

---

##### `instanceArnInput`<sup>Optional</sup> <a name="instanceArnInput" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.property.instanceArnInput"></a>

```typescript
public readonly instanceArnInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TransferWebAppIdentityProviderDetailsIdentityCenterConfig;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfig">TransferWebAppIdentityProviderDetailsIdentityCenterConfig</a>

---


### TransferWebAppIdentityProviderDetailsList <a name="TransferWebAppIdentityProviderDetailsList" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList.Initializer"></a>

```typescript
import { transferWebApp } from '@cdktn/provider-aws'

new transferWebApp.TransferWebAppIdentityProviderDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList.get"></a>

```typescript
public get(index: number): TransferWebAppIdentityProviderDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetails">TransferWebAppIdentityProviderDetails</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TransferWebAppIdentityProviderDetails[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetails">TransferWebAppIdentityProviderDetails</a>[]

---


### TransferWebAppIdentityProviderDetailsOutputReference <a name="TransferWebAppIdentityProviderDetailsOutputReference" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.Initializer"></a>

```typescript
import { transferWebApp } from '@cdktn/provider-aws'

new transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.putIdentityCenterConfig">putIdentityCenterConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.resetIdentityCenterConfig">resetIdentityCenterConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIdentityCenterConfig` <a name="putIdentityCenterConfig" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.putIdentityCenterConfig"></a>

```typescript
public putIdentityCenterConfig(value: IResolvable | TransferWebAppIdentityProviderDetailsIdentityCenterConfig[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.putIdentityCenterConfig.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfig">TransferWebAppIdentityProviderDetailsIdentityCenterConfig</a>[]

---

##### `resetIdentityCenterConfig` <a name="resetIdentityCenterConfig" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.resetIdentityCenterConfig"></a>

```typescript
public resetIdentityCenterConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.property.identityCenterConfig">identityCenterConfig</a></code> | <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList">TransferWebAppIdentityProviderDetailsIdentityCenterConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.property.identityCenterConfigInput">identityCenterConfigInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfig">TransferWebAppIdentityProviderDetailsIdentityCenterConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetails">TransferWebAppIdentityProviderDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `identityCenterConfig`<sup>Required</sup> <a name="identityCenterConfig" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.property.identityCenterConfig"></a>

```typescript
public readonly identityCenterConfig: TransferWebAppIdentityProviderDetailsIdentityCenterConfigList;
```

- *Type:* <a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfigList">TransferWebAppIdentityProviderDetailsIdentityCenterConfigList</a>

---

##### `identityCenterConfigInput`<sup>Optional</sup> <a name="identityCenterConfigInput" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.property.identityCenterConfigInput"></a>

```typescript
public readonly identityCenterConfigInput: IResolvable | TransferWebAppIdentityProviderDetailsIdentityCenterConfig[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsIdentityCenterConfig">TransferWebAppIdentityProviderDetailsIdentityCenterConfig</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TransferWebAppIdentityProviderDetails;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppIdentityProviderDetails">TransferWebAppIdentityProviderDetails</a>

---


### TransferWebAppWebAppUnitsList <a name="TransferWebAppWebAppUnitsList" id="@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList.Initializer"></a>

```typescript
import { transferWebApp } from '@cdktn/provider-aws'

new transferWebApp.TransferWebAppWebAppUnitsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList.get"></a>

```typescript
public get(index: number): TransferWebAppWebAppUnitsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnits">TransferWebAppWebAppUnits</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TransferWebAppWebAppUnits[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnits">TransferWebAppWebAppUnits</a>[]

---


### TransferWebAppWebAppUnitsOutputReference <a name="TransferWebAppWebAppUnitsOutputReference" id="@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.Initializer"></a>

```typescript
import { transferWebApp } from '@cdktn/provider-aws'

new transferWebApp.TransferWebAppWebAppUnitsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.resetProvisioned">resetProvisioned</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetProvisioned` <a name="resetProvisioned" id="@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.resetProvisioned"></a>

```typescript
public resetProvisioned(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.property.provisionedInput">provisionedInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.property.provisioned">provisioned</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnits">TransferWebAppWebAppUnits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `provisionedInput`<sup>Optional</sup> <a name="provisionedInput" id="@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.property.provisionedInput"></a>

```typescript
public readonly provisionedInput: number;
```

- *Type:* number

---

##### `provisioned`<sup>Required</sup> <a name="provisioned" id="@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.property.provisioned"></a>

```typescript
public readonly provisioned: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnitsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TransferWebAppWebAppUnits;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.transferWebApp.TransferWebAppWebAppUnits">TransferWebAppWebAppUnits</a>

---



