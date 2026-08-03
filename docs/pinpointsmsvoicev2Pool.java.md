# `pinpointsmsvoicev2Pool` Submodule <a name="`pinpointsmsvoicev2Pool` Submodule" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Pinpointsmsvoicev2Pool <a name="Pinpointsmsvoicev2Pool" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/pinpointsmsvoicev2_pool aws_pinpointsmsvoicev2_pool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer"></a>

```java
import io.cdktn.providers.aws.pinpointsmsvoicev2_pool.Pinpointsmsvoicev2Pool;

Pinpointsmsvoicev2Pool.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .messageType(java.lang.String)
    .originationIdentities(java.util.List<java.lang.String>)
//  .deletionProtectionEnabled(java.lang.Boolean|IResolvable)
//  .isoCountryCode(java.lang.String)
//  .optOutListName(java.lang.String)
//  .region(java.lang.String)
//  .selfManagedOptOutsEnabled(java.lang.Boolean|IResolvable)
//  .sharedRoutesEnabled(java.lang.Boolean|IResolvable)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(Pinpointsmsvoicev2PoolTimeouts)
//  .twoWayChannelArn(java.lang.String)
//  .twoWayChannelRole(java.lang.String)
//  .twoWayEnabled(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.messageType">messageType</a></code> | <code>java.lang.String</code> | Type of message. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.originationIdentities">originationIdentities</a></code> | <code>java.util.List<java.lang.String></code> | Set of origination identity ARNs to associate with the pool. At least one origination identity is required at creation. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.deletionProtectionEnabled">deletionProtectionEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether deletion protection is enabled. When `true`, the pool cannot be deleted. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.isoCountryCode">isoCountryCode</a></code> | <code>java.lang.String</code> | Two-character code, in ISO 3166-1 alpha-2 format, for the country or region of the pool. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.optOutListName">optOutListName</a></code> | <code>java.lang.String</code> | Name of the opt-out list to associate with the pool. Inherited from the initial origination identity when omitted. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.selfManagedOptOutsEnabled">selfManagedOptOutsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the pool relies on self-managed opt-out handling. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.sharedRoutesEnabled">sharedRoutesEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether shared routes are enabled for the pool. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/pinpointsmsvoicev2_pool#tags Pinpointsmsvoicev2Pool#tags}. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeouts">Pinpointsmsvoicev2PoolTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.twoWayChannelArn">twoWayChannelArn</a></code> | <code>java.lang.String</code> | ARN of the two-way channel that receives inbound messages. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.twoWayChannelRole">twoWayChannelRole</a></code> | <code>java.lang.String</code> | ARN of the IAM role that End User Messaging SMS assumes to publish inbound messages to the two-way channel. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.twoWayEnabled">twoWayEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether inbound message reception is enabled for the pool. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `messageType`<sup>Required</sup> <a name="messageType" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.messageType"></a>

- *Type:* java.lang.String

Type of message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/pinpointsmsvoicev2_pool#message_type Pinpointsmsvoicev2Pool#message_type}

---

##### `originationIdentities`<sup>Required</sup> <a name="originationIdentities" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.originationIdentities"></a>

- *Type:* java.util.List<java.lang.String>

Set of origination identity ARNs to associate with the pool. At least one origination identity is required at creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/pinpointsmsvoicev2_pool#origination_identities Pinpointsmsvoicev2Pool#origination_identities}

---

##### `deletionProtectionEnabled`<sup>Optional</sup> <a name="deletionProtectionEnabled" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.deletionProtectionEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether deletion protection is enabled. When `true`, the pool cannot be deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/pinpointsmsvoicev2_pool#deletion_protection_enabled Pinpointsmsvoicev2Pool#deletion_protection_enabled}

---

##### `isoCountryCode`<sup>Optional</sup> <a name="isoCountryCode" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.isoCountryCode"></a>

- *Type:* java.lang.String

Two-character code, in ISO 3166-1 alpha-2 format, for the country or region of the pool.

This field is optional for origination identity types that are not country-specific.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/pinpointsmsvoicev2_pool#iso_country_code Pinpointsmsvoicev2Pool#iso_country_code}

---

##### `optOutListName`<sup>Optional</sup> <a name="optOutListName" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.optOutListName"></a>

- *Type:* java.lang.String

Name of the opt-out list to associate with the pool. Inherited from the initial origination identity when omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/pinpointsmsvoicev2_pool#opt_out_list_name Pinpointsmsvoicev2Pool#opt_out_list_name}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.region"></a>

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/pinpointsmsvoicev2_pool#region Pinpointsmsvoicev2Pool#region}

---

##### `selfManagedOptOutsEnabled`<sup>Optional</sup> <a name="selfManagedOptOutsEnabled" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.selfManagedOptOutsEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the pool relies on self-managed opt-out handling.

When `false`, AWS auto-replies to HELP/STOP requests and manages the opt-out list. Inherited from the initial origination identity when omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/pinpointsmsvoicev2_pool#self_managed_opt_outs_enabled Pinpointsmsvoicev2Pool#self_managed_opt_outs_enabled}

---

##### `sharedRoutesEnabled`<sup>Optional</sup> <a name="sharedRoutesEnabled" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.sharedRoutesEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether shared routes are enabled for the pool.

When `true`, messages may use shared phone numbers or sender IDs in countries that allow it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/pinpointsmsvoicev2_pool#shared_routes_enabled Pinpointsmsvoicev2Pool#shared_routes_enabled}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/pinpointsmsvoicev2_pool#tags Pinpointsmsvoicev2Pool#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeouts">Pinpointsmsvoicev2PoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/pinpointsmsvoicev2_pool#timeouts Pinpointsmsvoicev2Pool#timeouts}

---

##### `twoWayChannelArn`<sup>Optional</sup> <a name="twoWayChannelArn" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.twoWayChannelArn"></a>

- *Type:* java.lang.String

ARN of the two-way channel that receives inbound messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/pinpointsmsvoicev2_pool#two_way_channel_arn Pinpointsmsvoicev2Pool#two_way_channel_arn}

---

##### `twoWayChannelRole`<sup>Optional</sup> <a name="twoWayChannelRole" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.twoWayChannelRole"></a>

- *Type:* java.lang.String

ARN of the IAM role that End User Messaging SMS assumes to publish inbound messages to the two-way channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/pinpointsmsvoicev2_pool#two_way_channel_role Pinpointsmsvoicev2Pool#two_way_channel_role}

---

##### `twoWayEnabled`<sup>Optional</sup> <a name="twoWayEnabled" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.twoWayEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether inbound message reception is enabled for the pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/pinpointsmsvoicev2_pool#two_way_enabled Pinpointsmsvoicev2Pool#two_way_enabled}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetDeletionProtectionEnabled">resetDeletionProtectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetIsoCountryCode">resetIsoCountryCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetOptOutListName">resetOptOutListName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetSelfManagedOptOutsEnabled">resetSelfManagedOptOutsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetSharedRoutesEnabled">resetSharedRoutesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetTwoWayChannelArn">resetTwoWayChannelArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetTwoWayChannelRole">resetTwoWayChannelRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetTwoWayEnabled">resetTwoWayEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.putTimeouts"></a>

```java
public void putTimeouts(Pinpointsmsvoicev2PoolTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeouts">Pinpointsmsvoicev2PoolTimeouts</a>

---

##### `resetDeletionProtectionEnabled` <a name="resetDeletionProtectionEnabled" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetDeletionProtectionEnabled"></a>

```java
public void resetDeletionProtectionEnabled()
```

##### `resetIsoCountryCode` <a name="resetIsoCountryCode" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetIsoCountryCode"></a>

```java
public void resetIsoCountryCode()
```

##### `resetOptOutListName` <a name="resetOptOutListName" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetOptOutListName"></a>

```java
public void resetOptOutListName()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetSelfManagedOptOutsEnabled` <a name="resetSelfManagedOptOutsEnabled" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetSelfManagedOptOutsEnabled"></a>

```java
public void resetSelfManagedOptOutsEnabled()
```

##### `resetSharedRoutesEnabled` <a name="resetSharedRoutesEnabled" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetSharedRoutesEnabled"></a>

```java
public void resetSharedRoutesEnabled()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTwoWayChannelArn` <a name="resetTwoWayChannelArn" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetTwoWayChannelArn"></a>

```java
public void resetTwoWayChannelArn()
```

##### `resetTwoWayChannelRole` <a name="resetTwoWayChannelRole" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetTwoWayChannelRole"></a>

```java
public void resetTwoWayChannelRole()
```

##### `resetTwoWayEnabled` <a name="resetTwoWayEnabled" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetTwoWayEnabled"></a>

```java
public void resetTwoWayEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Pinpointsmsvoicev2Pool resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.isConstruct"></a>

```java
import io.cdktn.providers.aws.pinpointsmsvoicev2_pool.Pinpointsmsvoicev2Pool;

Pinpointsmsvoicev2Pool.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.isTerraformElement"></a>

```java
import io.cdktn.providers.aws.pinpointsmsvoicev2_pool.Pinpointsmsvoicev2Pool;

Pinpointsmsvoicev2Pool.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.isTerraformResource"></a>

```java
import io.cdktn.providers.aws.pinpointsmsvoicev2_pool.Pinpointsmsvoicev2Pool;

Pinpointsmsvoicev2Pool.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.generateConfigForImport"></a>

```java
import io.cdktn.providers.aws.pinpointsmsvoicev2_pool.Pinpointsmsvoicev2Pool;

Pinpointsmsvoicev2Pool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),Pinpointsmsvoicev2Pool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a Pinpointsmsvoicev2Pool resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the Pinpointsmsvoicev2Pool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing Pinpointsmsvoicev2Pool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/pinpointsmsvoicev2_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the Pinpointsmsvoicev2Pool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.tagsAll">tagsAll</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference">Pinpointsmsvoicev2PoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.deletionProtectionEnabledInput">deletionProtectionEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.isoCountryCodeInput">isoCountryCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.messageTypeInput">messageTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.optOutListNameInput">optOutListNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.originationIdentitiesInput">originationIdentitiesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.selfManagedOptOutsEnabledInput">selfManagedOptOutsEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.sharedRoutesEnabledInput">sharedRoutesEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeouts">Pinpointsmsvoicev2PoolTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.twoWayChannelArnInput">twoWayChannelArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.twoWayChannelRoleInput">twoWayChannelRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.twoWayEnabledInput">twoWayEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.deletionProtectionEnabled">deletionProtectionEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.isoCountryCode">isoCountryCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.messageType">messageType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.optOutListName">optOutListName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.originationIdentities">originationIdentities</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.selfManagedOptOutsEnabled">selfManagedOptOutsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.sharedRoutesEnabled">sharedRoutesEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.twoWayChannelArn">twoWayChannelArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.twoWayChannelRole">twoWayChannelRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.twoWayEnabled">twoWayEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.tagsAll"></a>

```java
public StringMap getTagsAll();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.timeouts"></a>

```java
public Pinpointsmsvoicev2PoolTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference">Pinpointsmsvoicev2PoolTimeoutsOutputReference</a>

---

##### `deletionProtectionEnabledInput`<sup>Optional</sup> <a name="deletionProtectionEnabledInput" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.deletionProtectionEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getDeletionProtectionEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isoCountryCodeInput`<sup>Optional</sup> <a name="isoCountryCodeInput" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.isoCountryCodeInput"></a>

```java
public java.lang.String getIsoCountryCodeInput();
```

- *Type:* java.lang.String

---

##### `messageTypeInput`<sup>Optional</sup> <a name="messageTypeInput" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.messageTypeInput"></a>

```java
public java.lang.String getMessageTypeInput();
```

- *Type:* java.lang.String

---

##### `optOutListNameInput`<sup>Optional</sup> <a name="optOutListNameInput" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.optOutListNameInput"></a>

```java
public java.lang.String getOptOutListNameInput();
```

- *Type:* java.lang.String

---

##### `originationIdentitiesInput`<sup>Optional</sup> <a name="originationIdentitiesInput" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.originationIdentitiesInput"></a>

```java
public java.util.List<java.lang.String> getOriginationIdentitiesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `selfManagedOptOutsEnabledInput`<sup>Optional</sup> <a name="selfManagedOptOutsEnabledInput" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.selfManagedOptOutsEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getSelfManagedOptOutsEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `sharedRoutesEnabledInput`<sup>Optional</sup> <a name="sharedRoutesEnabledInput" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.sharedRoutesEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getSharedRoutesEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.timeoutsInput"></a>

```java
public IResolvable|Pinpointsmsvoicev2PoolTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeouts">Pinpointsmsvoicev2PoolTimeouts</a>

---

##### `twoWayChannelArnInput`<sup>Optional</sup> <a name="twoWayChannelArnInput" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.twoWayChannelArnInput"></a>

```java
public java.lang.String getTwoWayChannelArnInput();
```

- *Type:* java.lang.String

---

##### `twoWayChannelRoleInput`<sup>Optional</sup> <a name="twoWayChannelRoleInput" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.twoWayChannelRoleInput"></a>

```java
public java.lang.String getTwoWayChannelRoleInput();
```

- *Type:* java.lang.String

---

##### `twoWayEnabledInput`<sup>Optional</sup> <a name="twoWayEnabledInput" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.twoWayEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getTwoWayEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `deletionProtectionEnabled`<sup>Required</sup> <a name="deletionProtectionEnabled" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.deletionProtectionEnabled"></a>

```java
public java.lang.Boolean|IResolvable getDeletionProtectionEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `isoCountryCode`<sup>Required</sup> <a name="isoCountryCode" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.isoCountryCode"></a>

```java
public java.lang.String getIsoCountryCode();
```

- *Type:* java.lang.String

---

##### `messageType`<sup>Required</sup> <a name="messageType" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.messageType"></a>

```java
public java.lang.String getMessageType();
```

- *Type:* java.lang.String

---

##### `optOutListName`<sup>Required</sup> <a name="optOutListName" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.optOutListName"></a>

```java
public java.lang.String getOptOutListName();
```

- *Type:* java.lang.String

---

##### `originationIdentities`<sup>Required</sup> <a name="originationIdentities" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.originationIdentities"></a>

```java
public java.util.List<java.lang.String> getOriginationIdentities();
```

- *Type:* java.util.List<java.lang.String>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `selfManagedOptOutsEnabled`<sup>Required</sup> <a name="selfManagedOptOutsEnabled" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.selfManagedOptOutsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getSelfManagedOptOutsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `sharedRoutesEnabled`<sup>Required</sup> <a name="sharedRoutesEnabled" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.sharedRoutesEnabled"></a>

```java
public java.lang.Boolean|IResolvable getSharedRoutesEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `twoWayChannelArn`<sup>Required</sup> <a name="twoWayChannelArn" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.twoWayChannelArn"></a>

```java
public java.lang.String getTwoWayChannelArn();
```

- *Type:* java.lang.String

---

##### `twoWayChannelRole`<sup>Required</sup> <a name="twoWayChannelRole" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.twoWayChannelRole"></a>

```java
public java.lang.String getTwoWayChannelRole();
```

- *Type:* java.lang.String

---

##### `twoWayEnabled`<sup>Required</sup> <a name="twoWayEnabled" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.twoWayEnabled"></a>

```java
public java.lang.Boolean|IResolvable getTwoWayEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### Pinpointsmsvoicev2PoolConfig <a name="Pinpointsmsvoicev2PoolConfig" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.Initializer"></a>

```java
import io.cdktn.providers.aws.pinpointsmsvoicev2_pool.Pinpointsmsvoicev2PoolConfig;

Pinpointsmsvoicev2PoolConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .messageType(java.lang.String)
    .originationIdentities(java.util.List<java.lang.String>)
//  .deletionProtectionEnabled(java.lang.Boolean|IResolvable)
//  .isoCountryCode(java.lang.String)
//  .optOutListName(java.lang.String)
//  .region(java.lang.String)
//  .selfManagedOptOutsEnabled(java.lang.Boolean|IResolvable)
//  .sharedRoutesEnabled(java.lang.Boolean|IResolvable)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(Pinpointsmsvoicev2PoolTimeouts)
//  .twoWayChannelArn(java.lang.String)
//  .twoWayChannelRole(java.lang.String)
//  .twoWayEnabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.messageType">messageType</a></code> | <code>java.lang.String</code> | Type of message. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.originationIdentities">originationIdentities</a></code> | <code>java.util.List<java.lang.String></code> | Set of origination identity ARNs to associate with the pool. At least one origination identity is required at creation. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.deletionProtectionEnabled">deletionProtectionEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether deletion protection is enabled. When `true`, the pool cannot be deleted. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.isoCountryCode">isoCountryCode</a></code> | <code>java.lang.String</code> | Two-character code, in ISO 3166-1 alpha-2 format, for the country or region of the pool. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.optOutListName">optOutListName</a></code> | <code>java.lang.String</code> | Name of the opt-out list to associate with the pool. Inherited from the initial origination identity when omitted. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.region">region</a></code> | <code>java.lang.String</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.selfManagedOptOutsEnabled">selfManagedOptOutsEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the pool relies on self-managed opt-out handling. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.sharedRoutesEnabled">sharedRoutesEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether shared routes are enabled for the pool. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/pinpointsmsvoicev2_pool#tags Pinpointsmsvoicev2Pool#tags}. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeouts">Pinpointsmsvoicev2PoolTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.twoWayChannelArn">twoWayChannelArn</a></code> | <code>java.lang.String</code> | ARN of the two-way channel that receives inbound messages. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.twoWayChannelRole">twoWayChannelRole</a></code> | <code>java.lang.String</code> | ARN of the IAM role that End User Messaging SMS assumes to publish inbound messages to the two-way channel. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.twoWayEnabled">twoWayEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether inbound message reception is enabled for the pool. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `messageType`<sup>Required</sup> <a name="messageType" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.messageType"></a>

```java
public java.lang.String getMessageType();
```

- *Type:* java.lang.String

Type of message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/pinpointsmsvoicev2_pool#message_type Pinpointsmsvoicev2Pool#message_type}

---

##### `originationIdentities`<sup>Required</sup> <a name="originationIdentities" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.originationIdentities"></a>

```java
public java.util.List<java.lang.String> getOriginationIdentities();
```

- *Type:* java.util.List<java.lang.String>

Set of origination identity ARNs to associate with the pool. At least one origination identity is required at creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/pinpointsmsvoicev2_pool#origination_identities Pinpointsmsvoicev2Pool#origination_identities}

---

##### `deletionProtectionEnabled`<sup>Optional</sup> <a name="deletionProtectionEnabled" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.deletionProtectionEnabled"></a>

```java
public java.lang.Boolean|IResolvable getDeletionProtectionEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether deletion protection is enabled. When `true`, the pool cannot be deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/pinpointsmsvoicev2_pool#deletion_protection_enabled Pinpointsmsvoicev2Pool#deletion_protection_enabled}

---

##### `isoCountryCode`<sup>Optional</sup> <a name="isoCountryCode" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.isoCountryCode"></a>

```java
public java.lang.String getIsoCountryCode();
```

- *Type:* java.lang.String

Two-character code, in ISO 3166-1 alpha-2 format, for the country or region of the pool.

This field is optional for origination identity types that are not country-specific.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/pinpointsmsvoicev2_pool#iso_country_code Pinpointsmsvoicev2Pool#iso_country_code}

---

##### `optOutListName`<sup>Optional</sup> <a name="optOutListName" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.optOutListName"></a>

```java
public java.lang.String getOptOutListName();
```

- *Type:* java.lang.String

Name of the opt-out list to associate with the pool. Inherited from the initial origination identity when omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/pinpointsmsvoicev2_pool#opt_out_list_name Pinpointsmsvoicev2Pool#opt_out_list_name}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/pinpointsmsvoicev2_pool#region Pinpointsmsvoicev2Pool#region}

---

##### `selfManagedOptOutsEnabled`<sup>Optional</sup> <a name="selfManagedOptOutsEnabled" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.selfManagedOptOutsEnabled"></a>

```java
public java.lang.Boolean|IResolvable getSelfManagedOptOutsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the pool relies on self-managed opt-out handling.

When `false`, AWS auto-replies to HELP/STOP requests and manages the opt-out list. Inherited from the initial origination identity when omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/pinpointsmsvoicev2_pool#self_managed_opt_outs_enabled Pinpointsmsvoicev2Pool#self_managed_opt_outs_enabled}

---

##### `sharedRoutesEnabled`<sup>Optional</sup> <a name="sharedRoutesEnabled" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.sharedRoutesEnabled"></a>

```java
public java.lang.Boolean|IResolvable getSharedRoutesEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether shared routes are enabled for the pool.

When `true`, messages may use shared phone numbers or sender IDs in countries that allow it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/pinpointsmsvoicev2_pool#shared_routes_enabled Pinpointsmsvoicev2Pool#shared_routes_enabled}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/pinpointsmsvoicev2_pool#tags Pinpointsmsvoicev2Pool#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.timeouts"></a>

```java
public Pinpointsmsvoicev2PoolTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeouts">Pinpointsmsvoicev2PoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/pinpointsmsvoicev2_pool#timeouts Pinpointsmsvoicev2Pool#timeouts}

---

##### `twoWayChannelArn`<sup>Optional</sup> <a name="twoWayChannelArn" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.twoWayChannelArn"></a>

```java
public java.lang.String getTwoWayChannelArn();
```

- *Type:* java.lang.String

ARN of the two-way channel that receives inbound messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/pinpointsmsvoicev2_pool#two_way_channel_arn Pinpointsmsvoicev2Pool#two_way_channel_arn}

---

##### `twoWayChannelRole`<sup>Optional</sup> <a name="twoWayChannelRole" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.twoWayChannelRole"></a>

```java
public java.lang.String getTwoWayChannelRole();
```

- *Type:* java.lang.String

ARN of the IAM role that End User Messaging SMS assumes to publish inbound messages to the two-way channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/pinpointsmsvoicev2_pool#two_way_channel_role Pinpointsmsvoicev2Pool#two_way_channel_role}

---

##### `twoWayEnabled`<sup>Optional</sup> <a name="twoWayEnabled" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.twoWayEnabled"></a>

```java
public java.lang.Boolean|IResolvable getTwoWayEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether inbound message reception is enabled for the pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/pinpointsmsvoicev2_pool#two_way_enabled Pinpointsmsvoicev2Pool#two_way_enabled}

---

### Pinpointsmsvoicev2PoolTimeouts <a name="Pinpointsmsvoicev2PoolTimeouts" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeouts.Initializer"></a>

```java
import io.cdktn.providers.aws.pinpointsmsvoicev2_pool.Pinpointsmsvoicev2PoolTimeouts;

Pinpointsmsvoicev2PoolTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/pinpointsmsvoicev2_pool#create Pinpointsmsvoicev2Pool#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/pinpointsmsvoicev2_pool#delete Pinpointsmsvoicev2Pool#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/pinpointsmsvoicev2_pool#update Pinpointsmsvoicev2Pool#update}

---

## Classes <a name="Classes" id="Classes"></a>

### Pinpointsmsvoicev2PoolTimeoutsOutputReference <a name="Pinpointsmsvoicev2PoolTimeoutsOutputReference" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.aws.pinpointsmsvoicev2_pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference;

new Pinpointsmsvoicev2PoolTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeouts">Pinpointsmsvoicev2PoolTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|Pinpointsmsvoicev2PoolTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeouts">Pinpointsmsvoicev2PoolTimeouts</a>

---



