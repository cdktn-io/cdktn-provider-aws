# `networkmanagerSiteToSiteVpnAttachment` Submodule <a name="`networkmanagerSiteToSiteVpnAttachment` Submodule" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkmanagerSiteToSiteVpnAttachment <a name="NetworkmanagerSiteToSiteVpnAttachment" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/networkmanager_site_to_site_vpn_attachment aws_networkmanager_site_to_site_vpn_attachment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.Initializer"></a>

```typescript
import { networkmanagerSiteToSiteVpnAttachment } from '@cdktn/provider-aws'

new networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment(scope: Construct, id: string, config: NetworkmanagerSiteToSiteVpnAttachmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig">NetworkmanagerSiteToSiteVpnAttachmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig">NetworkmanagerSiteToSiteVpnAttachmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.resetRoutingPolicyLabel">resetRoutingPolicyLabel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.putTimeouts"></a>

```typescript
public putTimeouts(value: NetworkmanagerSiteToSiteVpnAttachmentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeouts">NetworkmanagerSiteToSiteVpnAttachmentTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRoutingPolicyLabel` <a name="resetRoutingPolicyLabel" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.resetRoutingPolicyLabel"></a>

```typescript
public resetRoutingPolicyLabel(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkmanagerSiteToSiteVpnAttachment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.isConstruct"></a>

```typescript
import { networkmanagerSiteToSiteVpnAttachment } from '@cdktn/provider-aws'

networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.isTerraformElement"></a>

```typescript
import { networkmanagerSiteToSiteVpnAttachment } from '@cdktn/provider-aws'

networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.isTerraformResource"></a>

```typescript
import { networkmanagerSiteToSiteVpnAttachment } from '@cdktn/provider-aws'

networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.generateConfigForImport"></a>

```typescript
import { networkmanagerSiteToSiteVpnAttachment } from '@cdktn/provider-aws'

networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a NetworkmanagerSiteToSiteVpnAttachment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworkmanagerSiteToSiteVpnAttachment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworkmanagerSiteToSiteVpnAttachment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/networkmanager_site_to_site_vpn_attachment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkmanagerSiteToSiteVpnAttachment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.attachmentPolicyRuleNumber">attachmentPolicyRuleNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.attachmentType">attachmentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.coreNetworkArn">coreNetworkArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.edgeLocation">edgeLocation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.ownerAccountId">ownerAccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.resourceArn">resourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.segmentName">segmentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference">NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.coreNetworkIdInput">coreNetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.routingPolicyLabelInput">routingPolicyLabelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeouts">NetworkmanagerSiteToSiteVpnAttachmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.vpnConnectionArnInput">vpnConnectionArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.coreNetworkId">coreNetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.routingPolicyLabel">routingPolicyLabel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.vpnConnectionArn">vpnConnectionArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `attachmentPolicyRuleNumber`<sup>Required</sup> <a name="attachmentPolicyRuleNumber" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.attachmentPolicyRuleNumber"></a>

```typescript
public readonly attachmentPolicyRuleNumber: number;
```

- *Type:* number

---

##### `attachmentType`<sup>Required</sup> <a name="attachmentType" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.attachmentType"></a>

```typescript
public readonly attachmentType: string;
```

- *Type:* string

---

##### `coreNetworkArn`<sup>Required</sup> <a name="coreNetworkArn" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.coreNetworkArn"></a>

```typescript
public readonly coreNetworkArn: string;
```

- *Type:* string

---

##### `edgeLocation`<sup>Required</sup> <a name="edgeLocation" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.edgeLocation"></a>

```typescript
public readonly edgeLocation: string;
```

- *Type:* string

---

##### `ownerAccountId`<sup>Required</sup> <a name="ownerAccountId" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.ownerAccountId"></a>

```typescript
public readonly ownerAccountId: string;
```

- *Type:* string

---

##### `resourceArn`<sup>Required</sup> <a name="resourceArn" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.resourceArn"></a>

```typescript
public readonly resourceArn: string;
```

- *Type:* string

---

##### `segmentName`<sup>Required</sup> <a name="segmentName" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.segmentName"></a>

```typescript
public readonly segmentName: string;
```

- *Type:* string

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference">NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference</a>

---

##### `coreNetworkIdInput`<sup>Optional</sup> <a name="coreNetworkIdInput" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.coreNetworkIdInput"></a>

```typescript
public readonly coreNetworkIdInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `routingPolicyLabelInput`<sup>Optional</sup> <a name="routingPolicyLabelInput" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.routingPolicyLabelInput"></a>

```typescript
public readonly routingPolicyLabelInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | NetworkmanagerSiteToSiteVpnAttachmentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeouts">NetworkmanagerSiteToSiteVpnAttachmentTimeouts</a>

---

##### `vpnConnectionArnInput`<sup>Optional</sup> <a name="vpnConnectionArnInput" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.vpnConnectionArnInput"></a>

```typescript
public readonly vpnConnectionArnInput: string;
```

- *Type:* string

---

##### `coreNetworkId`<sup>Required</sup> <a name="coreNetworkId" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.coreNetworkId"></a>

```typescript
public readonly coreNetworkId: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `routingPolicyLabel`<sup>Required</sup> <a name="routingPolicyLabel" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.routingPolicyLabel"></a>

```typescript
public readonly routingPolicyLabel: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `vpnConnectionArn`<sup>Required</sup> <a name="vpnConnectionArn" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.vpnConnectionArn"></a>

```typescript
public readonly vpnConnectionArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkmanagerSiteToSiteVpnAttachmentConfig <a name="NetworkmanagerSiteToSiteVpnAttachmentConfig" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.Initializer"></a>

```typescript
import { networkmanagerSiteToSiteVpnAttachment } from '@cdktn/provider-aws'

const networkmanagerSiteToSiteVpnAttachmentConfig: networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.coreNetworkId">coreNetworkId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/networkmanager_site_to_site_vpn_attachment#core_network_id NetworkmanagerSiteToSiteVpnAttachment#core_network_id}. |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.vpnConnectionArn">vpnConnectionArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/networkmanager_site_to_site_vpn_attachment#vpn_connection_arn NetworkmanagerSiteToSiteVpnAttachment#vpn_connection_arn}. |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/networkmanager_site_to_site_vpn_attachment#id NetworkmanagerSiteToSiteVpnAttachment#id}. |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.routingPolicyLabel">routingPolicyLabel</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/networkmanager_site_to_site_vpn_attachment#routing_policy_label NetworkmanagerSiteToSiteVpnAttachment#routing_policy_label}. |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/networkmanager_site_to_site_vpn_attachment#tags NetworkmanagerSiteToSiteVpnAttachment#tags}. |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/networkmanager_site_to_site_vpn_attachment#tags_all NetworkmanagerSiteToSiteVpnAttachment#tags_all}. |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeouts">NetworkmanagerSiteToSiteVpnAttachmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `coreNetworkId`<sup>Required</sup> <a name="coreNetworkId" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.coreNetworkId"></a>

```typescript
public readonly coreNetworkId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/networkmanager_site_to_site_vpn_attachment#core_network_id NetworkmanagerSiteToSiteVpnAttachment#core_network_id}.

---

##### `vpnConnectionArn`<sup>Required</sup> <a name="vpnConnectionArn" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.vpnConnectionArn"></a>

```typescript
public readonly vpnConnectionArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/networkmanager_site_to_site_vpn_attachment#vpn_connection_arn NetworkmanagerSiteToSiteVpnAttachment#vpn_connection_arn}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/networkmanager_site_to_site_vpn_attachment#id NetworkmanagerSiteToSiteVpnAttachment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `routingPolicyLabel`<sup>Optional</sup> <a name="routingPolicyLabel" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.routingPolicyLabel"></a>

```typescript
public readonly routingPolicyLabel: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/networkmanager_site_to_site_vpn_attachment#routing_policy_label NetworkmanagerSiteToSiteVpnAttachment#routing_policy_label}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/networkmanager_site_to_site_vpn_attachment#tags NetworkmanagerSiteToSiteVpnAttachment#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/networkmanager_site_to_site_vpn_attachment#tags_all NetworkmanagerSiteToSiteVpnAttachment#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NetworkmanagerSiteToSiteVpnAttachmentTimeouts;
```

- *Type:* <a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeouts">NetworkmanagerSiteToSiteVpnAttachmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/networkmanager_site_to_site_vpn_attachment#timeouts NetworkmanagerSiteToSiteVpnAttachment#timeouts}

---

### NetworkmanagerSiteToSiteVpnAttachmentTimeouts <a name="NetworkmanagerSiteToSiteVpnAttachmentTimeouts" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeouts.Initializer"></a>

```typescript
import { networkmanagerSiteToSiteVpnAttachment } from '@cdktn/provider-aws'

const networkmanagerSiteToSiteVpnAttachmentTimeouts: networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/networkmanager_site_to_site_vpn_attachment#create NetworkmanagerSiteToSiteVpnAttachment#create}. |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/networkmanager_site_to_site_vpn_attachment#delete NetworkmanagerSiteToSiteVpnAttachment#delete}. |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/networkmanager_site_to_site_vpn_attachment#update NetworkmanagerSiteToSiteVpnAttachment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/networkmanager_site_to_site_vpn_attachment#create NetworkmanagerSiteToSiteVpnAttachment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/networkmanager_site_to_site_vpn_attachment#delete NetworkmanagerSiteToSiteVpnAttachment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/networkmanager_site_to_site_vpn_attachment#update NetworkmanagerSiteToSiteVpnAttachment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference <a name="NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.Initializer"></a>

```typescript
import { networkmanagerSiteToSiteVpnAttachment } from '@cdktn/provider-aws'

new networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeouts">NetworkmanagerSiteToSiteVpnAttachmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworkmanagerSiteToSiteVpnAttachmentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.networkmanagerSiteToSiteVpnAttachment.NetworkmanagerSiteToSiteVpnAttachmentTimeouts">NetworkmanagerSiteToSiteVpnAttachmentTimeouts</a>

---



