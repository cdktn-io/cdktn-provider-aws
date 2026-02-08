# `odbNetwork` Submodule <a name="`odbNetwork` Submodule" id="@cdktn/provider-aws.odbNetwork"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OdbNetwork <a name="OdbNetwork" id="@cdktn/provider-aws.odbNetwork.OdbNetwork"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/odb_network aws_odb_network}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.Initializer"></a>

```typescript
import { odbNetwork } from '@cdktn/provider-aws'

new odbNetwork.OdbNetwork(scope: Construct, id: string, config: OdbNetworkConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkConfig">OdbNetworkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkConfig">OdbNetworkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.resetAvailabilityZone">resetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.resetCustomDomainName">resetCustomDomainName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.resetDefaultDnsPrefix">resetDefaultDnsPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.resetDeleteAssociatedResources">resetDeleteAssociatedResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.resetKmsAccess">resetKmsAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.resetKmsPolicyDocument">resetKmsPolicyDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.resetS3PolicyDocument">resetS3PolicyDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.resetStsAccess">resetStsAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.resetStsPolicyDocument">resetStsPolicyDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.putTimeouts"></a>

```typescript
public putTimeouts(value: OdbNetworkTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkTimeouts">OdbNetworkTimeouts</a>

---

##### `resetAvailabilityZone` <a name="resetAvailabilityZone" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.resetAvailabilityZone"></a>

```typescript
public resetAvailabilityZone(): void
```

##### `resetCustomDomainName` <a name="resetCustomDomainName" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.resetCustomDomainName"></a>

```typescript
public resetCustomDomainName(): void
```

##### `resetDefaultDnsPrefix` <a name="resetDefaultDnsPrefix" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.resetDefaultDnsPrefix"></a>

```typescript
public resetDefaultDnsPrefix(): void
```

##### `resetDeleteAssociatedResources` <a name="resetDeleteAssociatedResources" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.resetDeleteAssociatedResources"></a>

```typescript
public resetDeleteAssociatedResources(): void
```

##### `resetKmsAccess` <a name="resetKmsAccess" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.resetKmsAccess"></a>

```typescript
public resetKmsAccess(): void
```

##### `resetKmsPolicyDocument` <a name="resetKmsPolicyDocument" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.resetKmsPolicyDocument"></a>

```typescript
public resetKmsPolicyDocument(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetS3PolicyDocument` <a name="resetS3PolicyDocument" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.resetS3PolicyDocument"></a>

```typescript
public resetS3PolicyDocument(): void
```

##### `resetStsAccess` <a name="resetStsAccess" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.resetStsAccess"></a>

```typescript
public resetStsAccess(): void
```

##### `resetStsPolicyDocument` <a name="resetStsPolicyDocument" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.resetStsPolicyDocument"></a>

```typescript
public resetStsPolicyDocument(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OdbNetwork resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.isConstruct"></a>

```typescript
import { odbNetwork } from '@cdktn/provider-aws'

odbNetwork.OdbNetwork.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.isTerraformElement"></a>

```typescript
import { odbNetwork } from '@cdktn/provider-aws'

odbNetwork.OdbNetwork.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.isTerraformResource"></a>

```typescript
import { odbNetwork } from '@cdktn/provider-aws'

odbNetwork.OdbNetwork.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.generateConfigForImport"></a>

```typescript
import { odbNetwork } from '@cdktn/provider-aws'

odbNetwork.OdbNetwork.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a OdbNetwork resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OdbNetwork to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OdbNetwork that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/odb_network#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OdbNetwork to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.managedServices">managedServices</a></code> | <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesList">OdbNetworkManagedServicesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.ociDnsForwardingConfigs">ociDnsForwardingConfigs</a></code> | <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsList">OdbNetworkOciDnsForwardingConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.ociNetworkAnchorId">ociNetworkAnchorId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.ociNetworkAnchorUrl">ociNetworkAnchorUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.ociResourceAnchorName">ociResourceAnchorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.ociVcnId">ociVcnId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.ociVcnUrl">ociVcnUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.peeredCidrs">peeredCidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.percentProgress">percentProgress</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.statusReason">statusReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.tagsAll">tagsAll</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference">OdbNetworkTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.availabilityZoneIdInput">availabilityZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.backupSubnetCidrInput">backupSubnetCidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.clientSubnetCidrInput">clientSubnetCidrInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.customDomainNameInput">customDomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.defaultDnsPrefixInput">defaultDnsPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.deleteAssociatedResourcesInput">deleteAssociatedResourcesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.kmsAccessInput">kmsAccessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.kmsPolicyDocumentInput">kmsPolicyDocumentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.s3AccessInput">s3AccessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.s3PolicyDocumentInput">s3PolicyDocumentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.stsAccessInput">stsAccessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.stsPolicyDocumentInput">stsPolicyDocumentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkTimeouts">OdbNetworkTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.zeroEtlAccessInput">zeroEtlAccessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.availabilityZoneId">availabilityZoneId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.backupSubnetCidr">backupSubnetCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.clientSubnetCidr">clientSubnetCidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.customDomainName">customDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.defaultDnsPrefix">defaultDnsPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.deleteAssociatedResources">deleteAssociatedResources</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.kmsAccess">kmsAccess</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.kmsPolicyDocument">kmsPolicyDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.s3Access">s3Access</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.s3PolicyDocument">s3PolicyDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.stsAccess">stsAccess</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.stsPolicyDocument">stsPolicyDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.zeroEtlAccess">zeroEtlAccess</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `managedServices`<sup>Required</sup> <a name="managedServices" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.managedServices"></a>

```typescript
public readonly managedServices: OdbNetworkManagedServicesList;
```

- *Type:* <a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesList">OdbNetworkManagedServicesList</a>

---

##### `ociDnsForwardingConfigs`<sup>Required</sup> <a name="ociDnsForwardingConfigs" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.ociDnsForwardingConfigs"></a>

```typescript
public readonly ociDnsForwardingConfigs: OdbNetworkOciDnsForwardingConfigsList;
```

- *Type:* <a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsList">OdbNetworkOciDnsForwardingConfigsList</a>

---

##### `ociNetworkAnchorId`<sup>Required</sup> <a name="ociNetworkAnchorId" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.ociNetworkAnchorId"></a>

```typescript
public readonly ociNetworkAnchorId: string;
```

- *Type:* string

---

##### `ociNetworkAnchorUrl`<sup>Required</sup> <a name="ociNetworkAnchorUrl" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.ociNetworkAnchorUrl"></a>

```typescript
public readonly ociNetworkAnchorUrl: string;
```

- *Type:* string

---

##### `ociResourceAnchorName`<sup>Required</sup> <a name="ociResourceAnchorName" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.ociResourceAnchorName"></a>

```typescript
public readonly ociResourceAnchorName: string;
```

- *Type:* string

---

##### `ociVcnId`<sup>Required</sup> <a name="ociVcnId" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.ociVcnId"></a>

```typescript
public readonly ociVcnId: string;
```

- *Type:* string

---

##### `ociVcnUrl`<sup>Required</sup> <a name="ociVcnUrl" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.ociVcnUrl"></a>

```typescript
public readonly ociVcnUrl: string;
```

- *Type:* string

---

##### `peeredCidrs`<sup>Required</sup> <a name="peeredCidrs" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.peeredCidrs"></a>

```typescript
public readonly peeredCidrs: string[];
```

- *Type:* string[]

---

##### `percentProgress`<sup>Required</sup> <a name="percentProgress" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.percentProgress"></a>

```typescript
public readonly percentProgress: number;
```

- *Type:* number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `statusReason`<sup>Required</sup> <a name="statusReason" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.statusReason"></a>

```typescript
public readonly statusReason: string;
```

- *Type:* string

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.timeouts"></a>

```typescript
public readonly timeouts: OdbNetworkTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference">OdbNetworkTimeoutsOutputReference</a>

---

##### `availabilityZoneIdInput`<sup>Optional</sup> <a name="availabilityZoneIdInput" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.availabilityZoneIdInput"></a>

```typescript
public readonly availabilityZoneIdInput: string;
```

- *Type:* string

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.availabilityZoneInput"></a>

```typescript
public readonly availabilityZoneInput: string;
```

- *Type:* string

---

##### `backupSubnetCidrInput`<sup>Optional</sup> <a name="backupSubnetCidrInput" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.backupSubnetCidrInput"></a>

```typescript
public readonly backupSubnetCidrInput: string;
```

- *Type:* string

---

##### `clientSubnetCidrInput`<sup>Optional</sup> <a name="clientSubnetCidrInput" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.clientSubnetCidrInput"></a>

```typescript
public readonly clientSubnetCidrInput: string;
```

- *Type:* string

---

##### `customDomainNameInput`<sup>Optional</sup> <a name="customDomainNameInput" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.customDomainNameInput"></a>

```typescript
public readonly customDomainNameInput: string;
```

- *Type:* string

---

##### `defaultDnsPrefixInput`<sup>Optional</sup> <a name="defaultDnsPrefixInput" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.defaultDnsPrefixInput"></a>

```typescript
public readonly defaultDnsPrefixInput: string;
```

- *Type:* string

---

##### `deleteAssociatedResourcesInput`<sup>Optional</sup> <a name="deleteAssociatedResourcesInput" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.deleteAssociatedResourcesInput"></a>

```typescript
public readonly deleteAssociatedResourcesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `kmsAccessInput`<sup>Optional</sup> <a name="kmsAccessInput" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.kmsAccessInput"></a>

```typescript
public readonly kmsAccessInput: string;
```

- *Type:* string

---

##### `kmsPolicyDocumentInput`<sup>Optional</sup> <a name="kmsPolicyDocumentInput" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.kmsPolicyDocumentInput"></a>

```typescript
public readonly kmsPolicyDocumentInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `s3AccessInput`<sup>Optional</sup> <a name="s3AccessInput" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.s3AccessInput"></a>

```typescript
public readonly s3AccessInput: string;
```

- *Type:* string

---

##### `s3PolicyDocumentInput`<sup>Optional</sup> <a name="s3PolicyDocumentInput" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.s3PolicyDocumentInput"></a>

```typescript
public readonly s3PolicyDocumentInput: string;
```

- *Type:* string

---

##### `stsAccessInput`<sup>Optional</sup> <a name="stsAccessInput" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.stsAccessInput"></a>

```typescript
public readonly stsAccessInput: string;
```

- *Type:* string

---

##### `stsPolicyDocumentInput`<sup>Optional</sup> <a name="stsPolicyDocumentInput" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.stsPolicyDocumentInput"></a>

```typescript
public readonly stsPolicyDocumentInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | OdbNetworkTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkTimeouts">OdbNetworkTimeouts</a>

---

##### `zeroEtlAccessInput`<sup>Optional</sup> <a name="zeroEtlAccessInput" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.zeroEtlAccessInput"></a>

```typescript
public readonly zeroEtlAccessInput: string;
```

- *Type:* string

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

---

##### `availabilityZoneId`<sup>Required</sup> <a name="availabilityZoneId" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.availabilityZoneId"></a>

```typescript
public readonly availabilityZoneId: string;
```

- *Type:* string

---

##### `backupSubnetCidr`<sup>Required</sup> <a name="backupSubnetCidr" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.backupSubnetCidr"></a>

```typescript
public readonly backupSubnetCidr: string;
```

- *Type:* string

---

##### `clientSubnetCidr`<sup>Required</sup> <a name="clientSubnetCidr" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.clientSubnetCidr"></a>

```typescript
public readonly clientSubnetCidr: string;
```

- *Type:* string

---

##### `customDomainName`<sup>Required</sup> <a name="customDomainName" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.customDomainName"></a>

```typescript
public readonly customDomainName: string;
```

- *Type:* string

---

##### `defaultDnsPrefix`<sup>Required</sup> <a name="defaultDnsPrefix" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.defaultDnsPrefix"></a>

```typescript
public readonly defaultDnsPrefix: string;
```

- *Type:* string

---

##### `deleteAssociatedResources`<sup>Required</sup> <a name="deleteAssociatedResources" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.deleteAssociatedResources"></a>

```typescript
public readonly deleteAssociatedResources: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `kmsAccess`<sup>Required</sup> <a name="kmsAccess" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.kmsAccess"></a>

```typescript
public readonly kmsAccess: string;
```

- *Type:* string

---

##### `kmsPolicyDocument`<sup>Required</sup> <a name="kmsPolicyDocument" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.kmsPolicyDocument"></a>

```typescript
public readonly kmsPolicyDocument: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `s3Access`<sup>Required</sup> <a name="s3Access" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.s3Access"></a>

```typescript
public readonly s3Access: string;
```

- *Type:* string

---

##### `s3PolicyDocument`<sup>Required</sup> <a name="s3PolicyDocument" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.s3PolicyDocument"></a>

```typescript
public readonly s3PolicyDocument: string;
```

- *Type:* string

---

##### `stsAccess`<sup>Required</sup> <a name="stsAccess" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.stsAccess"></a>

```typescript
public readonly stsAccess: string;
```

- *Type:* string

---

##### `stsPolicyDocument`<sup>Required</sup> <a name="stsPolicyDocument" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.stsPolicyDocument"></a>

```typescript
public readonly stsPolicyDocument: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `zeroEtlAccess`<sup>Required</sup> <a name="zeroEtlAccess" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.zeroEtlAccess"></a>

```typescript
public readonly zeroEtlAccess: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetwork.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.odbNetwork.OdbNetwork.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OdbNetworkConfig <a name="OdbNetworkConfig" id="@cdktn/provider-aws.odbNetwork.OdbNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.Initializer"></a>

```typescript
import { odbNetwork } from '@cdktn/provider-aws'

const odbNetworkConfig: odbNetwork.OdbNetworkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.availabilityZoneId">availabilityZoneId</a></code> | <code>string</code> | The AZ ID of the AZ where the ODB network is located. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.backupSubnetCidr">backupSubnetCidr</a></code> | <code>string</code> | The CIDR range of the backup subnet for the ODB network. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.clientSubnetCidr">clientSubnetCidr</a></code> | <code>string</code> | The CIDR notation for the network resource. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.displayName">displayName</a></code> | <code>string</code> | The user-friendly name for the odb network. Changing this will force terraform to create a new resource. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.s3Access">s3Access</a></code> | <code>string</code> | Specifies the configuration for Amazon S3 access from the ODB network. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.zeroEtlAccess">zeroEtlAccess</a></code> | <code>string</code> | Specifies the configuration for Zero-ETL access from the ODB network. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.availabilityZone">availabilityZone</a></code> | <code>string</code> | The name of the Availability Zone (AZ) where the odb network is located. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.customDomainName">customDomainName</a></code> | <code>string</code> | The name of the custom domain that the network is located. custom_domain_name and default_dns_prefix both can't be given. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.defaultDnsPrefix">defaultDnsPrefix</a></code> | <code>string</code> | The default DNS prefix for the network resource. Changing this will force terraform to create new resource. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.deleteAssociatedResources">deleteAssociatedResources</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to true deletes associated OCI resources. Default false. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.kmsAccess">kmsAccess</a></code> | <code>string</code> | Specifies the configuration for Amazon KMS access from the ODB network. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.kmsPolicyDocument">kmsPolicyDocument</a></code> | <code>string</code> | Specifies the endpoint policy for Amazon KMS access from the ODB network. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.s3PolicyDocument">s3PolicyDocument</a></code> | <code>string</code> | Specifies the endpoint policy for Amazon S3 access from the ODB network. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.stsAccess">stsAccess</a></code> | <code>string</code> | Specifies the configuration for Amazon STS access from the ODB network. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.stsPolicyDocument">stsPolicyDocument</a></code> | <code>string</code> | Specifies the endpoint policy for Amazon STS access from the ODB network. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/odb_network#tags OdbNetwork#tags}. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkTimeouts">OdbNetworkTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `availabilityZoneId`<sup>Required</sup> <a name="availabilityZoneId" id="@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.availabilityZoneId"></a>

```typescript
public readonly availabilityZoneId: string;
```

- *Type:* string

The AZ ID of the AZ where the ODB network is located.

Changing this will force terraform to create new resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/odb_network#availability_zone_id OdbNetwork#availability_zone_id}

---

##### `backupSubnetCidr`<sup>Required</sup> <a name="backupSubnetCidr" id="@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.backupSubnetCidr"></a>

```typescript
public readonly backupSubnetCidr: string;
```

- *Type:* string

The CIDR range of the backup subnet for the ODB network.

Changing this will force terraform to create new resource.
	Constraints:
	   - Must not overlap with the CIDR range of the client subnet.
	   - Must not overlap with the CIDR ranges of the VPCs that are connected to the
	   ODB network.
	   - Must not use the following CIDR ranges that are reserved by OCI:
	   - 100.106.0.0/16 and 100.107.0.0/16
	   - 169.254.0.0/16
	   - 224.0.0.0 - 239.255.255.255
	   - 240.0.0.0 - 255.255.255.255

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/odb_network#backup_subnet_cidr OdbNetwork#backup_subnet_cidr}

---

##### `clientSubnetCidr`<sup>Required</sup> <a name="clientSubnetCidr" id="@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.clientSubnetCidr"></a>

```typescript
public readonly clientSubnetCidr: string;
```

- *Type:* string

The CIDR notation for the network resource.

Changing this will force terraform to create new resource.
 Constraints:
  	 - Must not overlap with the CIDR range of the backup subnet.
   	- Must not overlap with the CIDR ranges of the VPCs that are connected to the
   ODB network.
  	- Must not use the following CIDR ranges that are reserved by OCI:
  	 - 100.106.0.0/16 and 100.107.0.0/16
  	 - 169.254.0.0/16
   	- 224.0.0.0 - 239.255.255.255
   	- 240.0.0.0 - 255.255.255.255

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/odb_network#client_subnet_cidr OdbNetwork#client_subnet_cidr}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The user-friendly name for the odb network. Changing this will force terraform to create a new resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/odb_network#display_name OdbNetwork#display_name}

---

##### `s3Access`<sup>Required</sup> <a name="s3Access" id="@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.s3Access"></a>

```typescript
public readonly s3Access: string;
```

- *Type:* string

Specifies the configuration for Amazon S3 access from the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/odb_network#s3_access OdbNetwork#s3_access}

---

##### `zeroEtlAccess`<sup>Required</sup> <a name="zeroEtlAccess" id="@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.zeroEtlAccess"></a>

```typescript
public readonly zeroEtlAccess: string;
```

- *Type:* string

Specifies the configuration for Zero-ETL access from the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/odb_network#zero_etl_access OdbNetwork#zero_etl_access}

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.availabilityZone"></a>

```typescript
public readonly availabilityZone: string;
```

- *Type:* string

The name of the Availability Zone (AZ) where the odb network is located.

Changing this will force terraform to create new resource

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/odb_network#availability_zone OdbNetwork#availability_zone}

---

##### `customDomainName`<sup>Optional</sup> <a name="customDomainName" id="@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.customDomainName"></a>

```typescript
public readonly customDomainName: string;
```

- *Type:* string

The name of the custom domain that the network is located. custom_domain_name and default_dns_prefix both can't be given.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/odb_network#custom_domain_name OdbNetwork#custom_domain_name}

---

##### `defaultDnsPrefix`<sup>Optional</sup> <a name="defaultDnsPrefix" id="@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.defaultDnsPrefix"></a>

```typescript
public readonly defaultDnsPrefix: string;
```

- *Type:* string

The default DNS prefix for the network resource. Changing this will force terraform to create new resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/odb_network#default_dns_prefix OdbNetwork#default_dns_prefix}

---

##### `deleteAssociatedResources`<sup>Optional</sup> <a name="deleteAssociatedResources" id="@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.deleteAssociatedResources"></a>

```typescript
public readonly deleteAssociatedResources: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to true deletes associated OCI resources. Default false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/odb_network#delete_associated_resources OdbNetwork#delete_associated_resources}

---

##### `kmsAccess`<sup>Optional</sup> <a name="kmsAccess" id="@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.kmsAccess"></a>

```typescript
public readonly kmsAccess: string;
```

- *Type:* string

Specifies the configuration for Amazon KMS access from the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/odb_network#kms_access OdbNetwork#kms_access}

---

##### `kmsPolicyDocument`<sup>Optional</sup> <a name="kmsPolicyDocument" id="@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.kmsPolicyDocument"></a>

```typescript
public readonly kmsPolicyDocument: string;
```

- *Type:* string

Specifies the endpoint policy for Amazon KMS access from the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/odb_network#kms_policy_document OdbNetwork#kms_policy_document}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/odb_network#region OdbNetwork#region}

---

##### `s3PolicyDocument`<sup>Optional</sup> <a name="s3PolicyDocument" id="@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.s3PolicyDocument"></a>

```typescript
public readonly s3PolicyDocument: string;
```

- *Type:* string

Specifies the endpoint policy for Amazon S3 access from the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/odb_network#s3_policy_document OdbNetwork#s3_policy_document}

---

##### `stsAccess`<sup>Optional</sup> <a name="stsAccess" id="@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.stsAccess"></a>

```typescript
public readonly stsAccess: string;
```

- *Type:* string

Specifies the configuration for Amazon STS access from the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/odb_network#sts_access OdbNetwork#sts_access}

---

##### `stsPolicyDocument`<sup>Optional</sup> <a name="stsPolicyDocument" id="@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.stsPolicyDocument"></a>

```typescript
public readonly stsPolicyDocument: string;
```

- *Type:* string

Specifies the endpoint policy for Amazon STS access from the ODB network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/odb_network#sts_policy_document OdbNetwork#sts_policy_document}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/odb_network#tags OdbNetwork#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.odbNetwork.OdbNetworkConfig.property.timeouts"></a>

```typescript
public readonly timeouts: OdbNetworkTimeouts;
```

- *Type:* <a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkTimeouts">OdbNetworkTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/odb_network#timeouts OdbNetwork#timeouts}

---

### OdbNetworkManagedServices <a name="OdbNetworkManagedServices" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServices"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServices.Initializer"></a>

```typescript
import { odbNetwork } from '@cdktn/provider-aws'

const odbNetworkManagedServices: odbNetwork.OdbNetworkManagedServices = { ... }
```


### OdbNetworkManagedServicesKmsAccess <a name="OdbNetworkManagedServicesKmsAccess" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccess.Initializer"></a>

```typescript
import { odbNetwork } from '@cdktn/provider-aws'

const odbNetworkManagedServicesKmsAccess: odbNetwork.OdbNetworkManagedServicesKmsAccess = { ... }
```


### OdbNetworkManagedServicesManagedS3BackupAccess <a name="OdbNetworkManagedServicesManagedS3BackupAccess" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccess.Initializer"></a>

```typescript
import { odbNetwork } from '@cdktn/provider-aws'

const odbNetworkManagedServicesManagedS3BackupAccess: odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccess = { ... }
```


### OdbNetworkManagedServicesS3Access <a name="OdbNetworkManagedServicesS3Access" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3Access"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3Access.Initializer"></a>

```typescript
import { odbNetwork } from '@cdktn/provider-aws'

const odbNetworkManagedServicesS3Access: odbNetwork.OdbNetworkManagedServicesS3Access = { ... }
```


### OdbNetworkManagedServicesServiceNetworkEndpoint <a name="OdbNetworkManagedServicesServiceNetworkEndpoint" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpoint.Initializer"></a>

```typescript
import { odbNetwork } from '@cdktn/provider-aws'

const odbNetworkManagedServicesServiceNetworkEndpoint: odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpoint = { ... }
```


### OdbNetworkManagedServicesStsAccess <a name="OdbNetworkManagedServicesStsAccess" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccess.Initializer"></a>

```typescript
import { odbNetwork } from '@cdktn/provider-aws'

const odbNetworkManagedServicesStsAccess: odbNetwork.OdbNetworkManagedServicesStsAccess = { ... }
```


### OdbNetworkManagedServicesZeroEtlAccess <a name="OdbNetworkManagedServicesZeroEtlAccess" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccess"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccess.Initializer"></a>

```typescript
import { odbNetwork } from '@cdktn/provider-aws'

const odbNetworkManagedServicesZeroEtlAccess: odbNetwork.OdbNetworkManagedServicesZeroEtlAccess = { ... }
```


### OdbNetworkOciDnsForwardingConfigs <a name="OdbNetworkOciDnsForwardingConfigs" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigs.Initializer"></a>

```typescript
import { odbNetwork } from '@cdktn/provider-aws'

const odbNetworkOciDnsForwardingConfigs: odbNetwork.OdbNetworkOciDnsForwardingConfigs = { ... }
```


### OdbNetworkTimeouts <a name="OdbNetworkTimeouts" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeouts.Initializer"></a>

```typescript
import { odbNetwork } from '@cdktn/provider-aws'

const odbNetworkTimeouts: odbNetwork.OdbNetworkTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkTimeouts.property.update">update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/odb_network#create OdbNetwork#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/odb_network#delete OdbNetwork#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/odb_network#update OdbNetwork#update}

---

## Classes <a name="Classes" id="Classes"></a>

### OdbNetworkManagedServicesKmsAccessList <a name="OdbNetworkManagedServicesKmsAccessList" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessList.Initializer"></a>

```typescript
import { odbNetwork } from '@cdktn/provider-aws'

new odbNetwork.OdbNetworkManagedServicesKmsAccessList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessList.get"></a>

```typescript
public get(index: number): OdbNetworkManagedServicesKmsAccessOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### OdbNetworkManagedServicesKmsAccessOutputReference <a name="OdbNetworkManagedServicesKmsAccessOutputReference" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.Initializer"></a>

```typescript
import { odbNetwork } from '@cdktn/provider-aws'

new odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.property.ipv4Addresses">ipv4Addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.property.kmsPolicyDocument">kmsPolicyDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccess">OdbNetworkManagedServicesKmsAccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `ipv4Addresses`<sup>Required</sup> <a name="ipv4Addresses" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.property.ipv4Addresses"></a>

```typescript
public readonly ipv4Addresses: string[];
```

- *Type:* string[]

---

##### `kmsPolicyDocument`<sup>Required</sup> <a name="kmsPolicyDocument" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.property.kmsPolicyDocument"></a>

```typescript
public readonly kmsPolicyDocument: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OdbNetworkManagedServicesKmsAccess;
```

- *Type:* <a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccess">OdbNetworkManagedServicesKmsAccess</a>

---


### OdbNetworkManagedServicesList <a name="OdbNetworkManagedServicesList" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesList.Initializer"></a>

```typescript
import { odbNetwork } from '@cdktn/provider-aws'

new odbNetwork.OdbNetworkManagedServicesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesList.get"></a>

```typescript
public get(index: number): OdbNetworkManagedServicesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### OdbNetworkManagedServicesManagedS3BackupAccessList <a name="OdbNetworkManagedServicesManagedS3BackupAccessList" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessList.Initializer"></a>

```typescript
import { odbNetwork } from '@cdktn/provider-aws'

new odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessList.get"></a>

```typescript
public get(index: number): OdbNetworkManagedServicesManagedS3BackupAccessOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### OdbNetworkManagedServicesManagedS3BackupAccessOutputReference <a name="OdbNetworkManagedServicesManagedS3BackupAccessOutputReference" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.Initializer"></a>

```typescript
import { odbNetwork } from '@cdktn/provider-aws'

new odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.ipv4Addresses">ipv4Addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccess">OdbNetworkManagedServicesManagedS3BackupAccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ipv4Addresses`<sup>Required</sup> <a name="ipv4Addresses" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.ipv4Addresses"></a>

```typescript
public readonly ipv4Addresses: string[];
```

- *Type:* string[]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OdbNetworkManagedServicesManagedS3BackupAccess;
```

- *Type:* <a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccess">OdbNetworkManagedServicesManagedS3BackupAccess</a>

---


### OdbNetworkManagedServicesOutputReference <a name="OdbNetworkManagedServicesOutputReference" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.Initializer"></a>

```typescript
import { odbNetwork } from '@cdktn/provider-aws'

new odbNetwork.OdbNetworkManagedServicesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.property.kmsAccess">kmsAccess</a></code> | <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessList">OdbNetworkManagedServicesKmsAccessList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.property.managedS3BackupAccess">managedS3BackupAccess</a></code> | <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessList">OdbNetworkManagedServicesManagedS3BackupAccessList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.property.managedServiceIpv4Cidrs">managedServiceIpv4Cidrs</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.property.resourceGatewayArn">resourceGatewayArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.property.s3Access">s3Access</a></code> | <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessList">OdbNetworkManagedServicesS3AccessList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.property.serviceNetworkArn">serviceNetworkArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.property.serviceNetworkEndpoint">serviceNetworkEndpoint</a></code> | <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointList">OdbNetworkManagedServicesServiceNetworkEndpointList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.property.stsAccess">stsAccess</a></code> | <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessList">OdbNetworkManagedServicesStsAccessList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.property.zeroEtlAccess">zeroEtlAccess</a></code> | <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessList">OdbNetworkManagedServicesZeroEtlAccessList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServices">OdbNetworkManagedServices</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsAccess`<sup>Required</sup> <a name="kmsAccess" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.property.kmsAccess"></a>

```typescript
public readonly kmsAccess: OdbNetworkManagedServicesKmsAccessList;
```

- *Type:* <a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesKmsAccessList">OdbNetworkManagedServicesKmsAccessList</a>

---

##### `managedS3BackupAccess`<sup>Required</sup> <a name="managedS3BackupAccess" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.property.managedS3BackupAccess"></a>

```typescript
public readonly managedS3BackupAccess: OdbNetworkManagedServicesManagedS3BackupAccessList;
```

- *Type:* <a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesManagedS3BackupAccessList">OdbNetworkManagedServicesManagedS3BackupAccessList</a>

---

##### `managedServiceIpv4Cidrs`<sup>Required</sup> <a name="managedServiceIpv4Cidrs" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.property.managedServiceIpv4Cidrs"></a>

```typescript
public readonly managedServiceIpv4Cidrs: string[];
```

- *Type:* string[]

---

##### `resourceGatewayArn`<sup>Required</sup> <a name="resourceGatewayArn" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.property.resourceGatewayArn"></a>

```typescript
public readonly resourceGatewayArn: string;
```

- *Type:* string

---

##### `s3Access`<sup>Required</sup> <a name="s3Access" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.property.s3Access"></a>

```typescript
public readonly s3Access: OdbNetworkManagedServicesS3AccessList;
```

- *Type:* <a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessList">OdbNetworkManagedServicesS3AccessList</a>

---

##### `serviceNetworkArn`<sup>Required</sup> <a name="serviceNetworkArn" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.property.serviceNetworkArn"></a>

```typescript
public readonly serviceNetworkArn: string;
```

- *Type:* string

---

##### `serviceNetworkEndpoint`<sup>Required</sup> <a name="serviceNetworkEndpoint" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.property.serviceNetworkEndpoint"></a>

```typescript
public readonly serviceNetworkEndpoint: OdbNetworkManagedServicesServiceNetworkEndpointList;
```

- *Type:* <a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointList">OdbNetworkManagedServicesServiceNetworkEndpointList</a>

---

##### `stsAccess`<sup>Required</sup> <a name="stsAccess" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.property.stsAccess"></a>

```typescript
public readonly stsAccess: OdbNetworkManagedServicesStsAccessList;
```

- *Type:* <a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessList">OdbNetworkManagedServicesStsAccessList</a>

---

##### `zeroEtlAccess`<sup>Required</sup> <a name="zeroEtlAccess" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.property.zeroEtlAccess"></a>

```typescript
public readonly zeroEtlAccess: OdbNetworkManagedServicesZeroEtlAccessList;
```

- *Type:* <a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessList">OdbNetworkManagedServicesZeroEtlAccessList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OdbNetworkManagedServices;
```

- *Type:* <a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServices">OdbNetworkManagedServices</a>

---


### OdbNetworkManagedServicesS3AccessList <a name="OdbNetworkManagedServicesS3AccessList" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessList.Initializer"></a>

```typescript
import { odbNetwork } from '@cdktn/provider-aws'

new odbNetwork.OdbNetworkManagedServicesS3AccessList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessList.get"></a>

```typescript
public get(index: number): OdbNetworkManagedServicesS3AccessOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### OdbNetworkManagedServicesS3AccessOutputReference <a name="OdbNetworkManagedServicesS3AccessOutputReference" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.Initializer"></a>

```typescript
import { odbNetwork } from '@cdktn/provider-aws'

new odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.property.ipv4Addresses">ipv4Addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.property.s3PolicyDocument">s3PolicyDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3Access">OdbNetworkManagedServicesS3Access</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `ipv4Addresses`<sup>Required</sup> <a name="ipv4Addresses" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.property.ipv4Addresses"></a>

```typescript
public readonly ipv4Addresses: string[];
```

- *Type:* string[]

---

##### `s3PolicyDocument`<sup>Required</sup> <a name="s3PolicyDocument" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.property.s3PolicyDocument"></a>

```typescript
public readonly s3PolicyDocument: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3AccessOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OdbNetworkManagedServicesS3Access;
```

- *Type:* <a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesS3Access">OdbNetworkManagedServicesS3Access</a>

---


### OdbNetworkManagedServicesServiceNetworkEndpointList <a name="OdbNetworkManagedServicesServiceNetworkEndpointList" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointList.Initializer"></a>

```typescript
import { odbNetwork } from '@cdktn/provider-aws'

new odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointList.get"></a>

```typescript
public get(index: number): OdbNetworkManagedServicesServiceNetworkEndpointOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### OdbNetworkManagedServicesServiceNetworkEndpointOutputReference <a name="OdbNetworkManagedServicesServiceNetworkEndpointOutputReference" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.Initializer"></a>

```typescript
import { odbNetwork } from '@cdktn/provider-aws'

new odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.vpcEndpointId">vpcEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.vpcEndpointType">vpcEndpointType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpoint">OdbNetworkManagedServicesServiceNetworkEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `vpcEndpointId`<sup>Required</sup> <a name="vpcEndpointId" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.vpcEndpointId"></a>

```typescript
public readonly vpcEndpointId: string;
```

- *Type:* string

---

##### `vpcEndpointType`<sup>Required</sup> <a name="vpcEndpointType" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.vpcEndpointType"></a>

```typescript
public readonly vpcEndpointType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OdbNetworkManagedServicesServiceNetworkEndpoint;
```

- *Type:* <a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesServiceNetworkEndpoint">OdbNetworkManagedServicesServiceNetworkEndpoint</a>

---


### OdbNetworkManagedServicesStsAccessList <a name="OdbNetworkManagedServicesStsAccessList" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessList.Initializer"></a>

```typescript
import { odbNetwork } from '@cdktn/provider-aws'

new odbNetwork.OdbNetworkManagedServicesStsAccessList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessList.get"></a>

```typescript
public get(index: number): OdbNetworkManagedServicesStsAccessOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### OdbNetworkManagedServicesStsAccessOutputReference <a name="OdbNetworkManagedServicesStsAccessOutputReference" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.Initializer"></a>

```typescript
import { odbNetwork } from '@cdktn/provider-aws'

new odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.property.ipv4Addresses">ipv4Addresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.property.stsPolicyDocument">stsPolicyDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccess">OdbNetworkManagedServicesStsAccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `ipv4Addresses`<sup>Required</sup> <a name="ipv4Addresses" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.property.ipv4Addresses"></a>

```typescript
public readonly ipv4Addresses: string[];
```

- *Type:* string[]

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `stsPolicyDocument`<sup>Required</sup> <a name="stsPolicyDocument" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.property.stsPolicyDocument"></a>

```typescript
public readonly stsPolicyDocument: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccessOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OdbNetworkManagedServicesStsAccess;
```

- *Type:* <a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesStsAccess">OdbNetworkManagedServicesStsAccess</a>

---


### OdbNetworkManagedServicesZeroEtlAccessList <a name="OdbNetworkManagedServicesZeroEtlAccessList" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessList.Initializer"></a>

```typescript
import { odbNetwork } from '@cdktn/provider-aws'

new odbNetwork.OdbNetworkManagedServicesZeroEtlAccessList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessList.get"></a>

```typescript
public get(index: number): OdbNetworkManagedServicesZeroEtlAccessOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### OdbNetworkManagedServicesZeroEtlAccessOutputReference <a name="OdbNetworkManagedServicesZeroEtlAccessOutputReference" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.Initializer"></a>

```typescript
import { odbNetwork } from '@cdktn/provider-aws'

new odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.property.cidr">cidr</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccess">OdbNetworkManagedServicesZeroEtlAccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cidr`<sup>Required</sup> <a name="cidr" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.property.cidr"></a>

```typescript
public readonly cidr: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccessOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OdbNetworkManagedServicesZeroEtlAccess;
```

- *Type:* <a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkManagedServicesZeroEtlAccess">OdbNetworkManagedServicesZeroEtlAccess</a>

---


### OdbNetworkOciDnsForwardingConfigsList <a name="OdbNetworkOciDnsForwardingConfigsList" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsList.Initializer"></a>

```typescript
import { odbNetwork } from '@cdktn/provider-aws'

new odbNetwork.OdbNetworkOciDnsForwardingConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsList.get"></a>

```typescript
public get(index: number): OdbNetworkOciDnsForwardingConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### OdbNetworkOciDnsForwardingConfigsOutputReference <a name="OdbNetworkOciDnsForwardingConfigsOutputReference" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.Initializer"></a>

```typescript
import { odbNetwork } from '@cdktn/provider-aws'

new odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.property.domainName">domainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.property.ociDnsListenerIp">ociDnsListenerIp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigs">OdbNetworkOciDnsForwardingConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.property.domainName"></a>

```typescript
public readonly domainName: string;
```

- *Type:* string

---

##### `ociDnsListenerIp`<sup>Required</sup> <a name="ociDnsListenerIp" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.property.ociDnsListenerIp"></a>

```typescript
public readonly ociDnsListenerIp: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OdbNetworkOciDnsForwardingConfigs;
```

- *Type:* <a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkOciDnsForwardingConfigs">OdbNetworkOciDnsForwardingConfigs</a>

---


### OdbNetworkTimeoutsOutputReference <a name="OdbNetworkTimeoutsOutputReference" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.Initializer"></a>

```typescript
import { odbNetwork } from '@cdktn/provider-aws'

new odbNetwork.OdbNetworkTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkTimeouts">OdbNetworkTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.odbNetwork.OdbNetworkTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OdbNetworkTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.odbNetwork.OdbNetworkTimeouts">OdbNetworkTimeouts</a>

---



